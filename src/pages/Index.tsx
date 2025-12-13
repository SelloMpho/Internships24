import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { WhoItsForSection } from "@/components/home/WhoItsForSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <WhoItsForSection />
      <CategoriesSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
