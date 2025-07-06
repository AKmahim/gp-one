import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <div>Emad</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
