import "./App.css";
import "./styles/base/utilities.css";
import Home from "./pages/Home/Home";
import Cases from "./pages/Cases/Cases";
import Case from "./pages/Case/Case";
import News from "./pages/News/News";
import AllNews from "./pages/AllNews/AllNews";
import InvStats from "./pages/Investigator/InvestigatorStats/InvestigatorStats";
import InvCase from "./pages/Investigator/InvestigatorCase/InvestigatorCase";
import Error from "./pages/Error/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    { path: "*", element: <Error /> },
    { path: "/", element: <Home /> },
    { path: "/cases", element: <Cases /> },
    { path: "/case", element: <Case /> },
    { path: "/news", element: <News /> },
    { path: "/allnews", element: <AllNews /> },
    { path: "/investigator-stats", element: <InvStats /> },
    { path: "/investigator-case", element: <InvCase /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
