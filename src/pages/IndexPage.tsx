import AboutSection from "@/components/AboutSection";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
// import Products from "@/components/Products";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CardSection />
      <Products />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default IndexPage;
