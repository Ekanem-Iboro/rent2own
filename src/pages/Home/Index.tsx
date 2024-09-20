import ScrollToTop from "@/components/reuseable/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/Home";
import Sidebar from "@/layout/Sidebar";
import Notification from "./Dashboard/Notification";
import Order from "./Dashboard/Order";
import Help from "./Dashboard/Help";
import PrivateRoute from "@/components/privateRoute";
import HomeCarDetails from "./Dashboard/HomeCarDetails";
import NotFound from "../NotFound";
import Settings from "./Dashboard/Settings";
import { TermsAndCondition } from "./Dashboard/TermsAndCondition";
import PaymentSuccess from "./Dashboard/PaymentSuccess";
import TransactionFailed from "./Dashboard/PaymentFailed";

function Index() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/home_products/:id"
            element={
              <PrivateRoute>
                <HomeCarDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/notification"
            element={
              <PrivateRoute>
                <Notification />
              </PrivateRoute>
            }
          />

          <Route
            path="/terms_conditions"
            element={
              <PrivateRoute>
                <TermsAndCondition />
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
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />{" "}
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfailed" element={<TransactionFailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Index;
