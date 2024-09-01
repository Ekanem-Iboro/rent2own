import { Route, Routes, BrowserRouter } from "react-router-dom";
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
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="bg-[#FAFAFA]">
      <BrowserRouter>
        <AutoScrollToTop />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/products/:userid" element={<CarsDetails />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
