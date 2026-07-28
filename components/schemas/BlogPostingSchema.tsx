interface BlogPostingSchemaProps {
  post: {
    title: string;
    description?: string | null;
    publishedAt?: Date | string | null;
    updatedAt?: Date | string | null;
    slug: string;
    featuredImage?: string | null;
  };
}

function safeISOString(dateVal?: Date | string | null): string | undefined {
  if (!dateVal) return undefined;
  try {
    const d = new Date(dateVal);
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  } catch (e) {
    return undefined;
  }
}

export default function BlogPostingSchema({ post }: BlogPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ekimdemirci.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.description || "",
    "image": post.featuredImage ? [post.featuredImage] : undefined,
    "author": {
      "@type": "Person",
      "name": "Ekim Demirci",
      "url": "https://ekimdemirci.com/hakkimda",
      "telephone": "+90 507 047 47 02",
      "email": "ekmdmrci@gmail.com",
      "birthDate": "1991-11-02",
      "sameAs": [
        "https://www.linkedin.com/in/ekim-demirci/",
        "https://www.instagram.com/ekimdemircii/",
        "https://tr.pinterest.com/ekimdemirciseo/",
        "https://www.youtube.com/@ekimdemirciseo",
        "https://medium.com/@ekimdemirci"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "İstanbul",
        "addressCountry": "Türkiye"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ekim Demirci",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ekimdemirci.com/logo.png"
      }
    },
    "datePublished": safeISOString(post.publishedAt),
    "dateModified": safeISOString(post.updatedAt) || safeISOString(post.publishedAt),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
