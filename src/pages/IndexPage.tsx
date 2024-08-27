import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CardSection />
      <Products />
      <HowItWorks />
      <Faq />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;
