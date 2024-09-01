// import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

// interface PrivateRouteProps {
//   children: ReactNode;
// }

// const PrivateRoute = ({ children }: PrivateRouteProps) => {
//   const sessionToken = localStorage.getItem("session_token");
//   return sessionToken ? <>{children}</> : <Navigate to="/sign-in" />;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const sessionToken = localStorage.getItem("session_token");
  return sessionToken ? <>{children}</> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
