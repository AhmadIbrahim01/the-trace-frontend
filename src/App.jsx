import "./App.css";
import "./styles/base/utilities.css";
import Home from "./pages/Home/Home";
import Cases from "./pages/Cases/Cases";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cases", element: <Cases /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
