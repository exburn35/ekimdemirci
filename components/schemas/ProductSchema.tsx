interface OfferItem {
  name: string;
  price: string | number;
  priceCurrency?: string;
  description?: string;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  brandName?: string;
  lowPrice?: number;
  highPrice?: number;
  offers?: OfferItem[];
  ratingValue?: number;
  reviewCount?: number;
}

export default function ProductSchema({
  name,
  description,
  url,
  image = "https://ekimdemirci.com/uploads/geo-visual-semantic-patent-diagram.png",
  brandName = "Ekim Demirci",
  lowPrice = 25000,
  highPrice = 75000,
  ratingValue = 4.9,
  reviewCount = 48,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": [image],
    "description": description,
    "sku": "GEO-SERVICE-001",
    "brand": {
      "@type": "Brand",
      "name": brandName,
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": url,
      "priceCurrency": "TRY",
      "lowPrice": lowPrice,
      "highPrice": highPrice,
      "offerCount": 3,
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": brandName,
        "url": "https://ekimdemirci.com",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
