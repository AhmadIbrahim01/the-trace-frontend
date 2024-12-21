import "./App.css";
import "./styles/base/utilities.css";
import Home from "./pages/Home/Home";
import Cases from "./pages/Cases/Cases";
import Case from "./pages/Case/Case";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cases", element: <Cases /> },
    { path: "/case", element: <Case /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
