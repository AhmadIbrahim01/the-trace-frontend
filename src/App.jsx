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
import EditInvestigator from "./pages/Admin/AdminForms/EditInvestigator/EditInvestigator";
import EditCase from "./pages/Admin/AdminForms/EditCase/EditCase";
import EditUser from "./pages/Admin/AdminForms/Edit User/EditUser";
import ManageAdmins from "./pages/Admin/AdminDashboard/ManageAdmins/ManageAdmins";
import AddAdmin from "./pages/Admin/AdminForms/AddAdmin/AddAdmin";
import EditAdmin from "./pages/Admin/AdminForms/EditAdmin/EditAdmin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminProtectedRoute from "./components/ProtectedRoute/AdminProtectedRoute";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import AdminProfile from "./pages/Admin/AdminDashboard/AdminProfile/AdminProfile";

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
        { path: "/submit-tip", element: <SubmitTip /> },

        {
          path: "/investigator-stats",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <InvStats />
            </ProtectedRoute>
          ),
        },
        {
          path: "/investigator-case",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <InvCase />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add-evidence",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AddEvidence />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add-suspect-statement",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AddSuspectStatement />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add-witness-statement",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AddWitnessStatement />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add-witness",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AddWitness />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add-suspect",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AddSuspect />
            </ProtectedRoute>
          ),
        },
        {
          path: "/ai-sketch",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AISketch />
            </ProtectedRoute>
          ),
        },
        {
          path: "/ai-statement",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <AIStatement />
            </ProtectedRoute>
          ),
        },
        {
          path: "/investigator-cases",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <InvestigatorCases />
            </ProtectedRoute>
          ),
        },
        {
          path: "/investigator-selected-case",
          element: (
            <ProtectedRoute allowedUserType="investigator">
              <InvestigatorSelectedCase />
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "*", element: <Error /> },
    { path: "/unauthorized", element: <Unauthorized /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/user-profile", element: <UserProfile /> },

    {
      path: "/admin-profile",
      element: (
        <AdminProtectedRoute>
          <AdminProfile />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/admin-dashboard",
      element: (
        <AdminProtectedRoute>
          <AdminDashboard />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/manage-users",
      element: (
        <AdminProtectedRoute>
          <ManageUsers />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/manage-investigators",
      element: (
        <AdminProtectedRoute>
          <ManageInvestigators />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/manage-cases",
      element: (
        <AdminProtectedRoute>
          <ManageCases />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/manage-admins",
      element: (
        <AdminProtectedRoute>
          <ManageAdmins />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/add-investigator",
      element: (
        <AdminProtectedRoute>
          <AddInvestigator />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/edit-investigator",
      element: (
        <AdminProtectedRoute>
          <EditInvestigator />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/add-admin",
      element: (
        <AdminProtectedRoute>
          <AddAdmin />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/edit-admin",
      element: (
        <AdminProtectedRoute>
          <EditAdmin />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/add-case",
      element: (
        <AdminProtectedRoute>
          <AddCase />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/edit-case",
      element: (
        <AdminProtectedRoute>
          <EditCase />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/add-user",
      element: (
        <AdminProtectedRoute>
          <AddUser />
        </AdminProtectedRoute>
      ),
    },
    {
      path: "/edit-user",
      element: (
        <AdminProtectedRoute>
          <EditUser />
        </AdminProtectedRoute>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
