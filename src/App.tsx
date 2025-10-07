import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./AppLayout/route_layout";
import CompZeroOne from "./pages/comp01";
import CompZeroTwo from "./pages/comp02";
import CompZeroThree from "./pages/comp03";
import CompZeroFour from "./pages/comp04";
import TableComponentZeroone from "./pages/Tables/table01";
import WebSocketExample from "./pages/WebSockets/WS01";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route path="/first-component" element={<CompZeroOne />}></Route>
        <Route path="/second-component" element={<CompZeroTwo />}></Route>
        <Route path="third" element={<CompZeroThree />}></Route>
        <Route path="Four" element={<CompZeroFour />}></Route>
        <Route path="tableOne" element={<TableComponentZeroone />} />
        <Route path="webSocketOne" element={<WebSocketExample />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
