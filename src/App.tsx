import { Route, Routes, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/reuseable/ScrollToTop";
import AutoScrollToTop from "./components/reuseable/AutoScrollToTop";
import IndexPage from "./pages/IndexPage";
import NotFound from "./pages/NotFound";
import CarsDetails from "./pages/CarsDetails";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/forgot-password/forgot-password";
import ResetPassword from "./pages/Auth/forgot-password/reset-password";
import Index from "./pages/Home/Index";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import CarListing from "./pages/CarListing";
import Term_Conditions from "./pages/Term_Conditions";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const session_token = localStorage.getItem("session_token");

    if (session_token && !hasRedirected) {
      // Redirect to /home only if not redirected before
      navigate("/home", { replace: true });
      setHasRedirected(true); // Set hasRedirected to true to prevent future redirects
    }
  }, [navigate, hasRedirected]); // Include hasRedirected in the dependency array

  return (
    <div className="bg-[#FAFAFA]">
      <AutoScrollToTop />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/products/:userid" element={<CarsDetails />} />
        <Route path="/carlisting" element={<CarListing />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/termsandconditions" element={<Term_Conditions />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/*" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
