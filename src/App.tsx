import {
  Route,
  Routes,
  // useNavigate,
  // useNavigate
} from "react-router-dom";
import ScrollToTop from "./components/reuseable/ScrollToTop";
import AutoScrollToTop from "./components/reuseable/AutoScrollToTop";
import { lazy, Suspense } from "react";
import Loader from "./components/reuseable/PageLoader";
const IndexPage = lazy(() => import("./pages/IndexPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CarsDetails = lazy(() => import("./pages/CarsDetails"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const ForgotPassword = lazy(
  () => import("./pages/Auth/forgot-password/forgot-password")
);
const ResetPassword = lazy(
  () => import("./pages/Auth/forgot-password/reset-password")
);
const Index = lazy(() => import("./pages/Home/Index"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Faq = lazy(() => import("./pages/Faq"));
const CarListing = lazy(() => import("./pages/CarListing"));
const Term_Conditions = lazy(() => import("./pages/Term_Conditions"));
const UploadKYC = lazy(() => import("@/pages/Auth/UploadKYC"));

function App() {
  return (
    <div className="bg-[#FAFAFA]">
      <ScrollToTop />
      <AutoScrollToTop />
      <Suspense fallback={<Loader />}>
        {" "}
        {/* Wrap Routes with Suspense */}
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/products/:userid" element={<CarsDetails />} />
          <Route path="/carlisting" element={<CarListing />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/termsandconditions" element={<Term_Conditions />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/uploadkyc" element={<UploadKYC />} />
          <Route path="/*" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
