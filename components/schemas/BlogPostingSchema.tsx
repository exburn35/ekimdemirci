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
    "datePublished": post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
    "dateModified": post.updatedAt ? new Date(post.updatedAt).toISOString() : (post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
