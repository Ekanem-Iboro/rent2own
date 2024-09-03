import ScrollToTop from "@/components/reuseable/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/Home";
import Sidebar from "@/layout/Sidebar";
import Notification from "./Dashboard/Notification";
import Order from "./Dashboard/Order";
import Help from "./Dashboard/Help";
import Profile from "./Dashboard/Profile";
import PrivateRoute from "@/components/privateRoute";
import HomeCarDetails from "./Dashboard/HomeCarDetails";
import NotFound from "../NotFound";

function Index() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home_products/:id" element={<HomeCarDetails />} />
          <Route
            path="/notification"
            element={
              <PrivateRoute>
                <Notification />
              </PrivateRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <Order />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/help"
            element={
              <PrivateRoute>
                <Help />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />{" "}
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Index;
