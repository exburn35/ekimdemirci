const fs = require('fs');
const path = require('path');

// Blog URLs from Bloglar.json
const blogUrls = require('../Bloglar.json').map(entry => entry[0]);

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'blogs');

// Simple HTML to text converter
function htmlToText(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function scrapeBlog(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      console.log(`  ❌ HTTP ${response.status} for ${url}`);
      return null;
    }
    
    const html = await response.text();
    
    // Extract title from <h1> or <title>
    let title = '';
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) {
      title = htmlToText(h1Match[1]);
    }
    if (!title) {
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (titleMatch) {
        title = htmlToText(titleMatch[1]).replace(/\s*\|\s*Ekim Demirci\s*$/, '');
      }
    }
    
    // Extract meta description
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) ||
                      html.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
    const excerpt = descMatch ? descMatch[1] : '';
    
    // Extract OG image
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([\s\S]*?)["']/i) ||
                         html.match(/<meta\s+content=["']([\s\S]*?)["']\s+property=["']og:image["']/i);
    const ogImage = ogImageMatch ? ogImageMatch[1] : '';
    
    // Extract featured image
    const featuredImgMatch = html.match(/wp-block-post-featured-image[^>]*>[\s\S]*?<img[^>]+src=["']([\s\S]*?)["']/i);
    const featuredImage = featuredImgMatch ? featuredImgMatch[1] : ogImage;
    
    // Extract published time
    const pubTimeMatch = html.match(/<meta\s+property=["']article:published_time["']\s+content=["']([\s\S]*?)["']/i) ||
                         html.match(/<meta\s+content=["']([\s\S]*?)["']\s+property=["']article:published_time["']/i);
    const publishedTime = pubTimeMatch ? pubTimeMatch[1] : null;
    
    // Extract modified time
    const modTimeMatch = html.match(/<meta\s+property=["']article:modified_time["']\s+content=["']([\s\S]*?)["']/i) ||
                         html.match(/<meta\s+content=["']([\s\S]*?)["']\s+property=["']article:modified_time["']/i);
    const modifiedTime = modTimeMatch ? modTimeMatch[1] : null;
    
    // Extract content from entry-content or article
    let contentHtml = '';
    const entryContentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div[^>]*class="[^"]*(?:post-tags|sharedaddy|jp-relatedposts|sd-sharing|author-bio)[^"]*"|<footer|<\/article|<nav|<!--)/i);
    if (entryContentMatch) {
      contentHtml = entryContentMatch[1];
    } else {
      // Fallback: look for wp-block and article content
      const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
      if (articleMatch) {
        contentHtml = articleMatch[1];
      }
    }
    
    // Clean up content - remove scripts, styles, share buttons, related content
    contentHtml = contentHtml
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<div[^>]*class="[^"]*(?:sharedaddy|jp-relatedposts|sd-sharing|author-bio|post-navigation)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
      .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
      .trim();
    
    // Extract category
    const catMatch = html.match(/<a[^>]*rel=["']category[^"']*["'][^>]*>([\s\S]*?)<\/a>/i) ||
                     html.match(/<span[^>]*class="[^"]*cat-links[^"]*"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
    const category = catMatch ? htmlToText(catMatch[1] || catMatch[2]) : 'SEO';
    
    // Calculate read time
    const textContent = htmlToText(contentHtml);
    const wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    
    // Generate slug from URL
    let slug = url.replace('https://ekimdemirci.com/', '').replace(/\/$/, '');
    
    // Extract meta title
    const metaTitleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const metaTitle = metaTitleMatch ? htmlToText(metaTitleMatch[1]) : title;
    
    return {
      title: title || 'Başlıksız',
      slug,
      excerpt,
      content: contentHtml,
      featuredImage: featuredImage || null,
      ogImage: ogImage || null,
      metaTitle: metaTitle || null,
      metaDescription: excerpt || null,
      publishedAt: publishedTime || new Date().toISOString(),
      updatedAt: modifiedTime || publishedTime || new Date().toISOString(),
      published: true,
      category: category || 'SEO',
      readTime,
      tags: [],
      views: 0
    };
  } catch (error) {
    console.error(`  ❌ Error scraping ${url}:`, error.message);
    return null;
  }
}

async function run() {
  console.log(`\n🚀 Starting blog scraper...`);
  console.log(`📋 Total blogs to scrape: ${blogUrls.length}\n`);
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const allBlogs = [];
  let successCount = 0;
  
  for (let i = 0; i < blogUrls.length; i++) {
    const url = blogUrls[i];
    if (!url || !url.startsWith('http')) continue;
    
    console.log(`[${i + 1}/${blogUrls.length}] Scraping: ${url}`);
    const data = await scrapeBlog(url);
    
    if (data && data.content) {
      allBlogs.push(data);
      successCount++;
      console.log(`  ✅ ${data.title} (${data.readTime} dk)`);
    } else {
      console.log(`  ⚠️ No content found`);
    }
    
    // Small delay to be nice to the server
    await new Promise(r => setTimeout(r, 500));
  }
  
  // Save individual blog posts
  for (const blog of allBlogs) {
    const blogFile = path.join(OUTPUT_DIR, `${blog.slug}.json`);
    fs.writeFileSync(blogFile, JSON.stringify(blog, null, 2), 'utf-8');
  }
  
  // Save index (list without content for blog listing page)
  const blogIndex = allBlogs.map(({ content, ...rest }) => rest);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, '_index.json'),
    JSON.stringify(blogIndex, null, 2),
    'utf-8'
  );
  
  console.log(`\n✅ Done! Scraped ${successCount}/${blogUrls.length} blogs`);
  console.log(`📁 Saved to: ${OUTPUT_DIR}`);
}

run().catch(console.error);
