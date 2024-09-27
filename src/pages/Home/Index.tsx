import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/reuseable/ScrollToTop";
import Sidebar from "@/layout/Sidebar";
import PrivateRoute from "@/components/privateRoute";
import NotFound from "../NotFound";
import Loader from "@/components/reuseable/PageLoader";

// Lazy load components
const Home = lazy(() => import("./Dashboard/Home"));
const HomeCarDetails = lazy(() => import("./Dashboard/HomeCarDetails"));
const NotificationPanel = lazy(() => import("./Dashboard/Notification"));
const Order = lazy(() => import("./Dashboard/Order"));
const Help = lazy(() => import("./Dashboard/Help"));
const Settings = lazy(() => import("./Dashboard/Settings"));
const TermsAndCondition = lazy(() => import("./Dashboard/TermsAndCondition"));
const PaymentSuccess = lazy(() => import("./Dashboard/PaymentSuccess"));
const TransactionFailed = lazy(() => import("./Dashboard/PaymentFailed"));

function Index() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
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
                  <NotificationPanel />
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
                  <Order />
                </PrivateRoute>
              }
            />
            <Route
              path="/help"
              element={
                <PrivateRoute>
                  <Help />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfailed" element={<TransactionFailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Index;
