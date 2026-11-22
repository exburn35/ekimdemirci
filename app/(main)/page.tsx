import PersonSchema from "@/components/schemas/PersonSchema";
import HomeHero from "@/components/home/HomeHero";
import HomeProofBand from "@/components/home/HomeProofBand";
import HomeSeoGeo from "@/components/home/HomeSeoGeo";
import HomeServices from "@/components/home/HomeServices";
import HomeProcess from "@/components/home/HomeProcess";
import HomeCaseStudies from "@/components/home/HomeCaseStudies";
import HomeWhyIndependent from "@/components/home/HomeWhyIndependent";
import HomeAboutPreview from "@/components/home/HomeAboutPreview";
import HomePricingFactors from "@/components/home/HomePricingFactors";
import HomeResources from "@/components/home/HomeResources";
import HomeFaq from "@/components/home/HomeFaq";
import HomeAuditForm from "@/components/home/HomeAuditForm";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";

const description =
  "Bağımsız SEO ve GEO danışmanı Ekim Demirci; markanızı Google aramalarında ve ChatGPT, Gemini, Perplexity gibi yapay zeka cevaplarında görünür kılar. Ücretsiz ön analiz isteyin.";

export const metadata: Metadata = {
  title: {
    absolute: "SEO ve GEO Uzmanı Ekim Demirci",
  },
  description,
  openGraph: {
    title: "SEO ve GEO Uzmanı Ekim Demirci",
    description,
  },
  twitter: {
    title: "SEO ve GEO Uzmanı Ekim Demirci",
    description,
  },
};

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <>
      <PersonSchema />
      <HomeHero />
      <HomeProofBand />
      <HomeSeoGeo />
      <HomeServices />
      <HomeProcess />
      <HomeCaseStudies />
      <HomeWhyIndependent />
      <HomeAboutPreview />
      <HomePricingFactors />
      <HomeResources posts={posts} />
      <HomeFaq />
      <HomeAuditForm />
    </>
  );
}
