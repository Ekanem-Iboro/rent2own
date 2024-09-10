import Contact from "@/components/Contact";
import DetailsBanner from "@/components/DetailsBanner";
import Footer from "@/components/Footer";
import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import NavBar from "@/components/reuseable/NavBar";

const ContactUs = () => {
  return (
    <div className="px-2">
      <NavBar />
      <header className="md:bg-[url('assets/images/carbg.jpg')] bg-[url('assets/images/mobilecarbg.jpg')] bg-no-repeat bg-cover w-full h-[550px] flex flex-col items-center justify-center mb-[7rem]">
        <p className="md:text-[60px] text-[24px] md:leading-[72px] leading-[28.8px] font-[600] text-[#FFFFFF]">
          Contact Us
        </p>
        <BreadcrumbComp item="Contact us" color="#ffffff" />
      </header>
      <div className="">
        <Contact />
      </div>
      <DetailsBanner />
      <Footer />
    </div>
  );
};

export default ContactUs;
