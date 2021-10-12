import NavBar from "./components/navBar/NavBar";
import { useLocation } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter.tsx";
import Footer from "./components/footer/Footer";
import InfluencerRouter from "./pages/router/InfluencerRouter";
import InfluencerNavBar from "./components/navBar/influencer/InfluencerNavBar";
import {AuthProvider} from './Auth';

function App() {
  let location = useLocation();

  return (
    <AuthProvider>
    <>
      {location.pathname.includes("influencer") ? (
        <>
          <InfluencerNavBar />
          <InfluencerRouter />
        </>
      ) : (
        <>
          <NavBar />
          <AppRouter />
        </>
      )}
      <Footer />
    </>
    </AuthProvider>
  );
}

export default App;
