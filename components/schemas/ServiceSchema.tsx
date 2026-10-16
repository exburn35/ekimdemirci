interface ServiceSchemaProps {
  name: string;
  description: string;
  url?: string;
}

export default function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const fullUrl = url
    ? (url.startsWith("http") ? url : `https://ekimdemirci.com${url.startsWith("/") ? "" : "/"}${url}`)
    : "https://ekimdemirci.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ekim Demirci",
      "url": "https://ekimdemirci.com"
    },
    "serviceType": "SEO Hizmeti",
    "url": fullUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
