import "./App.css";
import "./styles/base/utilities.css";
import Home from "./pages/Home/Home";
import Cases from "./pages/Cases/Cases";
import Case from "./pages/Case/Case";
import News from "./pages/News/News";
import AllNews from "./pages/AllNews/AllNews";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cases", element: <Cases /> },
    { path: "/case", element: <Case /> },
    { path: "/news", element: <News /> },
    { path: "/allnews", element: <AllNews /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
