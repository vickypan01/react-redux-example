import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
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

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route path="/first-component" element={<CompZeroOne />}></Route>
      <Route path="/second-component" element={<CompZeroTwo />}></Route>
      <Route path="third" element={<CompZeroThree />}></Route>
      <Route path="Four" element={<CompZeroFour />}></Route>
      <Route path="tableOne" element={<TableComponentZeroone />} />
      <Route path="webSocketOne" element={<WebSocketExample />} />
      <Route path="google-map" element={<GoogleMap01 />} />
      <Route path="lazyLoading" element={<LazyloadingExample />} />
      <Route path="GraphqlAPI" element={<GraphQLAPI />} />
    </Route>
  )
);

export default AppRoutes;
