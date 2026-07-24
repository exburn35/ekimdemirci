import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import CaseStudyClient from "./CaseStudyClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.company} Başarı Hikayesi | Ekim Demirci`,
    description: `${study.company} için uygulanan SEO stratejisi ve elde edilen organik arama sonuçları.`,
    alternates: {
      canonical: `https://ekimdemirci.com/basari-hikayeleri/${study.slug}`,
    },
  };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  const relatedStories = caseStudies
    .filter((s) => s.slug !== study.slug)
    .slice(0, 2);

  return <CaseStudyClient study={study} relatedStories={relatedStories} />;
}
