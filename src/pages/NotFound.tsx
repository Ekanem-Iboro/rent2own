import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center flex-col justify-center h-screen bg-[#2D2D2D]">
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-[15rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
          404
        </h1>
      </motion.div>
      <p className="text-slate-300 font-[600] text-[40px] underline">
        Page Not Found
      </p>
      <button className="underline text-slate-300 mt-3">
        <a href="/">Back to Home</a>
      </button>
    </div>
  );
};

export default NotFound;
