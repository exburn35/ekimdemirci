import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
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
  const caseTitle = `${study.company} Başarı Hikayesi`;
  return {
    title: caseTitle,
    description: `${study.company} için uygulanan SEO stratejisi ve elde edilen organik arama sonuçları.`,
    alternates: {
      canonical: `https://ekimdemirci.com/basari-hikayeleri/${study.slug}`,
    },
    openGraph: {
      title: `${caseTitle} | Ekim Demirci`,
      description: `${study.company} için uygulanan SEO stratejisi ve elde edilen organik arama sonuçları.`,
    },
    twitter: {
      title: `${caseTitle} | Ekim Demirci`,
      description: `${study.company} için uygulanan SEO stratejisi ve elde edilen organik arama sonuçları.`,
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

  return (
    <>
      <Breadcrumb items={[
        { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
        { name: study.company, href: `/basari-hikayeleri/${study.slug}` }
      ]} />
      <CaseStudyClient study={study} relatedStories={relatedStories} />
    </>
  );
}
