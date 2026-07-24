interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
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
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
