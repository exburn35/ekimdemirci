import ServiceSchema from "./ServiceSchema";

interface ClientServiceSchemaProps {
  name: string;
  description: string;
  url?: string;
}

export default function ClientServiceSchema({ name, description, url }: ClientServiceSchemaProps) {
  return <ServiceSchema name={name} description={description} url={url} />;
}
