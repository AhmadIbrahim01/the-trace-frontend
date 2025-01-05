import "./App.css";
import "./styles/base/utilities.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cases from "./pages/Cases/Cases";
import Case from "./pages/Case/Case";
import News from "./pages/News/News";
import AllNews from "./pages/AllNews/AllNews";
import InvStats from "./pages/Investigator/InvestigatorStats/InvestigatorStats";
import InvCase from "./pages/Investigator/InvestigatorCase/InvestigatorCase";
import Error from "./pages/Error/Error";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/Form/Form";
import AddEvidence from "./pages/Investigator/InvestigatorForms/AddEvidence/AddEvidence";
import AddSuspectStatement from "./pages/Investigator/InvestigatorForms/AddSuspectStatement/AddSuspectStatement";
import AddWitnessStatement from "./pages/Investigator/InvestigatorForms/AddWitnessStatement/AddWitnessStatement";
import AddWitness from "./pages/Investigator/InvestigatorForms/AddWitness/AddWitness";
import AddSuspect from "./pages/Investigator/InvestigatorForms/AddSuspect/AddSuspect";
import SubmitTip from "./pages/User/UserForms/SubmitTip/SubmitTip";
import AddInvestigator from "./pages/Admin/AdminForms/AddInvestigator/AddInvestigator";
import AddCase from "./pages/Admin/AdminForms/AddCase/AddCase";
import AddUser from "./pages/Admin/AdminForms/AddUser/AddUser";
import AdminDashboard from "./pages/Admin/AdminDashboard/Dashboard/Dashboard";
import ManageInvestigators from "./pages/Admin/AdminDashboard/ManageInvestigators/ManageInvestigators";
import ManageCases from "./pages/Admin/AdminDashboard/ManageCases/ManageCases";
import ManageUsers from "./pages/Admin/AdminDashboard/ManageUsers/ManageUsers";
import AISketch from "./pages/Tools/AISketch/AISketch";
import AIStatement from "./pages/Tools/AIStatement/AIStatement";
import Layout from "./components/Layout/Layout";
import UserProfile from "./pages/User/UserProfile/UserProfile";
import InvestigatorCases from "./pages/Investigator/InvestigatorCases/InvestigatorCases";
import InvestigatorSelectedCase from "./pages/Investigator/InvestigatorSelectedCase/InvestigatorSelectedCase";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cases", element: <Cases /> },
        { path: "/case", element: <Case /> },
        { path: "/news", element: <News /> },
        { path: "/allnews", element: <AllNews /> },
        { path: "/investigator-stats", element: <InvStats /> },
        { path: "/investigator-case", element: <InvCase /> },
        { path: "/form", element: <Form /> },
        { path: "/add-evidence", element: <AddEvidence /> },
        { path: "/add-suspect-statement", element: <AddSuspectStatement /> },
        { path: "/add-witness-statement", element: <AddWitnessStatement /> },
        { path: "/add-witness", element: <AddWitness /> },
        { path: "/add-suspect", element: <AddSuspect /> },
        { path: "/submit-tip", element: <SubmitTip /> },
        { path: "/add-investigator", element: <AddInvestigator /> },
        { path: "/add-case", element: <AddCase /> },
        { path: "/add-user", element: <AddUser /> },
        { path: "/admin-dashboard", element: <AdminDashboard /> },
        { path: "/manage-investigators", element: <ManageInvestigators /> },
        { path: "/manage-cases", element: <ManageCases /> },
        { path: "/manage-users", element: <ManageUsers /> },
        { path: "/ai-sketch", element: <AISketch /> },
        { path: "/ai-statement", element: <AIStatement /> },
        { path: "/investigator-cases", element: <InvestigatorCases /> },
        { path: "/investigator-cases", element: <InvestigatorCases /> },
        {
          path: "/investigator-selected-case",
          element: <InvestigatorSelectedCase />,
        },
      ],
    },
    { path: "*", element: <Error /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/user-profile", element: <UserProfile /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
