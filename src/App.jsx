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
import Form from "./components/Form/Form";
import AddEvidence from "./pages/Investigator/InvestigatorForms/AddEvidence/AddEvidence";
import AddStatement from "./pages/Investigator/InvestigatorForms/AddStatement/AddStatement";
import AddWitness from "./pages/Investigator/InvestigatorForms/AddWitness/AddWitness";
import AddSuspect from "./pages/Investigator/InvestigatorForms/AddSuspect/AddSuspect";
import SubmitTip from "./pages/User/UserForms/SubmitTip/SubmitTip";
import AddInvestigator from "./pages/Admin/AdminForms/AddInvestigator";

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
    { path: "/form", element: <Form /> },
    { path: "/add-evidence", element: <AddEvidence /> },
    { path: "/add-statement", element: <AddStatement /> },
    { path: "/add-witness", element: <AddWitness /> },
    { path: "/add-suspect", element: <AddSuspect /> },
    { path: "/submit-tip", element: <SubmitTip /> },
    { path: "/add-investigator", element: <AddInvestigator /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
