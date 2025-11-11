import React, { type ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { USER_PRIVILADGE } from "../api_urls/common_constant";

type UserPrivilege = (typeof USER_PRIVILADGE)[keyof typeof USER_PRIVILADGE];

interface ProtectedRouteProps {
  element: ReactElement;
  requiredPrivilege: UserPrivilege;
  userPrivilege: UserPrivilege;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  requiredPrivilege,
  userPrivilege,
}) => {
  if (userPrivilege === USER_PRIVILADGE.notAllowed) {
    return <Navigate to="/unothorised" replace />;
  }

  if (requiredPrivilege === USER_PRIVILADGE.notAllowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (
    requiredPrivilege === USER_PRIVILADGE.haveAccess &&
    userPrivilege !== USER_PRIVILADGE.haveAccess
  ) {
    return <Navigate to="/unothorised" replace />;
  }

  return element;
};

export default ProtectedRoute;
