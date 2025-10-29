import "./App.css";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/appRoutes";

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes}></RouterProvider>
    </>
  );
}

export default App;
