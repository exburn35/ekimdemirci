import PersonSchema from "@/components/schemas/PersonSchema";
import HomeHero from "@/components/home/HomeHero";
import HomeProofBand from "@/components/home/HomeProofBand";
import HomeWhatSeoDoes from "@/components/home/HomeWhatSeoDoes";
import HomeSeoVsGeo from "@/components/home/HomeSeoVsGeo";
import HomeWhyIndependent from "@/components/home/HomeWhyIndependent";
import HomeHowWeWork from "@/components/home/HomeHowWeWork";
import HomeCaseStudies from "@/components/home/HomeCaseStudies";
import HomeAboutPreview from "@/components/home/HomeAboutPreview";
import HomePricingFactors from "@/components/home/HomePricingFactors";
import HomeAuditForm from "@/components/home/HomeAuditForm";
import HomeFaq from "@/components/home/HomeFaq";
import HomeLatestBlog from "@/components/home/HomeLatestBlog";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute: "SEO ve GEO Danışmanı Ekim Demirci",
  },
  description: "Arama motorlarında ve üretken yapay zeka (GEO) yanıtlarında işletmenizin görünürlüğünü artıran bağımsız freelance SEO uzmanı Ekim Demirci.",
  openGraph: {
    title: "SEO ve GEO Danışmanı Ekim Demirci",
    description: "Arama motorlarında ve üretken yapay zeka (GEO) yanıtlarında işletmenizin görünürlüğünü artıran bağımsız freelance SEO uzmanı Ekim Demirci.",
  },
  twitter: {
    title: "SEO ve GEO Danışmanı Ekim Demirci",
    description: "Arama motorlarında ve üretken yapay zeka (GEO) yanıtlarında işletmenizin görünürlüğünü artıran bağımsız freelance SEO uzmanı Ekim Demirci.",
  },
};

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <>
      <PersonSchema />
      <HomeHero />
      <HomeProofBand />
      <HomeWhatSeoDoes />
      <HomeSeoVsGeo />
      <HomeWhyIndependent />
      <HomeHowWeWork />
      <HomeCaseStudies />
      <HomeAboutPreview />
      <HomePricingFactors />
      <HomeAuditForm />
      <HomeFaq />
      <HomeLatestBlog posts={posts} />
    </>
  );
}
