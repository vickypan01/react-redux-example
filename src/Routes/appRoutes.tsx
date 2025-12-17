import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProtectedRoute from "../Utils/ProtectedRoute";
import { USER_PRIVILADGE } from "../api_urls/common_constant";
import RouteLayout from "../AppLayout/route_layout";
import CompZeroOne from "../pages/comp01";
import CompZeroTwo from "../pages/comp02";
import CompZeroThree from "../pages/comp03";
import CompZeroFour from "../pages/comp04";
import TableComponentZeroone from "../pages/Tables/table01";
import WebSocketExample from "../pages/WebSockets/WS01";
import GoogleMap01 from "../pages/GoogleMaps/map01";
import LazyloadingExample from "../pages/LazyLoadingExmp/lazyloading";
import GraphQLAPI from "../Redux/GAPI/GraphQLAPI";
import Unauthorized from "../Unauthorized";
import ChildComponent from "../pages/ParentComp/ChildComp/childComponent";
import JWTToeknExample from "../pages/JWT_Tokens/JWTToeknExample";
import LoginCredentials from "../pages/JWT_Tokens/loginCredentials";

const userPrivilegee = USER_PRIVILADGE.onlyView;

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route
        path="first-component"
        element={
          <ProtectedRoute
            element={<CompZeroOne />}
            requiredPrivilege={USER_PRIVILADGE.haveAccess}
            userPrivilege={userPrivilegee}
          />
        }
      />
      <Route
        path="second-component"
        element={
          <ProtectedRoute
            element={<CompZeroTwo />}
            requiredPrivilege={USER_PRIVILADGE.notAllowed}
            userPrivilege={userPrivilegee}
          />
        }
      />
      <Route path="third" element={<CompZeroThree />}></Route>
      <Route path="Four" element={<CompZeroFour />}></Route>
      <Route path="tableOne" element={<TableComponentZeroone />} />
      <Route path="webSocketOne" element={<WebSocketExample />} />
      <Route path="google-map" element={<GoogleMap01 />} />
      <Route path="lazyLoading" element={<LazyloadingExample />} />
      <Route path="GraphqlAPI" element={<GraphQLAPI />} />
      <Route path="subchild" element={<ChildComponent />} />
      <Route path="jwt-token" element={<JWTToeknExample />} />
      <Route path="/loginCredentials" element={<LoginCredentials />} />
    </Route>
  )
);

export default AppRoutes;
