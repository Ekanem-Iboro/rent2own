import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Adjust the threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[15%] right-7 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-primary p-4 rounded-full shadow-lg"
        title="Back to top"
      >
        <ArrowUp size={25} className="text-white" />
        <BorderBeam size={100} duration={6} delay={4} />
      </button>
    </div>
  );
};

export default ScrollToTop;
