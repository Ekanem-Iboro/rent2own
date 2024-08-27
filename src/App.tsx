import { Route, Routes, BrowserRouter } from "react-router-dom";
// import ProductDetails from "./pages/ProductDetails";
// import Register from "./pages/Auth/Register";
// import Login from "./pages/Auth/Login";
// import Index from "./pages/Home";
import ScrollToTop from "./components/reuseable/ScrollToTop";
import AutoScrollToTop from "./components/reuseable/AutoScrollToTop";
import IndexPage from "./pages/IndexPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-[#FAFAFA]">
      <BrowserRouter>
        <AutoScrollToTop />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          {/* <Route path="/products/:userid" element={<ProductDetails />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/*" element={<Index />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
