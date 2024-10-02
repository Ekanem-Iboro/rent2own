import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappHelp from "@/components/HelpWhatsapp";
import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";

const Help = () => {
  const whasappLink = "https://wa.me/610466092198";
  const message = "I need help to Rent a Car.";

  // const whatsappURL = `${whasappLink}?text=${encodeURIComponent(message)}`;
  const whatsappURL = `${whasappLink}?text=${encodeURI(message)}`;

  return (
    <div className="px-2">
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <WhatsappHelp />
      </a>
      <header className="md:mx-0 mx-3 mb-11">
        <BreadcrumbComp item="Help" color="#191919" sepCol="" />
        <p className=" font-[600] text-[24px] leading-[28.8px] text-[#0A0B0A]">
          Help
        </p>
      </header>
      <div className="">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Help;
