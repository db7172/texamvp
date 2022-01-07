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

function App() {
  const [isUserLogedIn] = useState(true);
  let location = useLocation();

  return (
    <AuthProvider>
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
