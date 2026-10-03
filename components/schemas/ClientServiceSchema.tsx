"use client";

import { usePathname } from "next/navigation";
import ServiceSchema from "./ServiceSchema";

interface ClientServiceSchemaProps {
  name: string;
  description: string;
}

export default function ClientServiceSchema({ name, description }: ClientServiceSchemaProps) {
  const pathname = usePathname();
  const fullUrl = `https://ekimdemirci.com${pathname || ""}`;

  return <ServiceSchema name={name} description={description} url={fullUrl} />;
}
