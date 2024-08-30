import ScrollToTop from "@/components/reuseable/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/Home";
import Sidebar from "@/layout/Sidebar";
import Notification from "./Dashboard/Notification";
import Order from "./Dashboard/Order";
import Help from "./Dashboard/Help";
import Profile from "./Dashboard/Profile";

function Index() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default Index;
