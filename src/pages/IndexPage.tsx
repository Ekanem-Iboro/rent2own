import CardSection from "@/components/CardSection";
import Contact from "@/components/Contact";
import DetailsBanner from "@/components/DetailsBanner";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <Products />
      <CardSection />
      <DetailsBanner />
      {/* <Banner /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;
