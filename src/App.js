import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext,AuthContextProvider } from "./context/authContext";

function App() {
  // const { currentUser } = useContext(AuthContext);
  //const context = useContext(AuthContext);
  const { user} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    
    if (!user.auth) {
      console.log(user.auth)
      return <Navigate to="/login"/>;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       

        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
        
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <AuthContextProvider>
    <div>
      <RouterProvider router={router} />
    </div>
    </AuthContextProvider>
  );
}

export default App;
