import NavBar from "./components/navBar/NavBar";
import { useLocation } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter.tsx";
import Footer from "./components/footer/Footer";
import InfluencerRouter from "./pages/router/InfluencerRouter";
import InfluencerNavBar from "./components/navBar/influencer/InfluencerNavBar";
import { AuthProvider } from "./Auth";
import { useState } from "react";
import UserRouter from "./pages/router/UserRouter";
import UserNavBar from "./components/navBar/user/UserNavBar";
import AdminRouter from "./AdminPanel/AdminRouter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import firebase from "./firebase";
import Schema from 'async-validator';

function App() {
  const [isUserLogedIn] = useState(true);
  let location = useLocation();

  // firebase.auth().signOut();
  Schema.warning = function(){};

  return (
    <AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <>
        {location.pathname.includes("influencer") ? (
          <>
            <InfluencerNavBar />
            <InfluencerRouter />
          </>
        ) : location.pathname.includes("user") && isUserLogedIn ? (
          <>
            <UserNavBar />
            <UserRouter />
          </>
        ) : location.pathname.includes("admin") ? (
          <>
            <AdminRouter />
          </>
        ) : (
          <>
            <NavBar />
            <AppRouter />
          </>
        )}
        {location.pathname.includes("admin") ? null : <Footer />}
      </>
    </AuthProvider>
  );
}

export default App;
