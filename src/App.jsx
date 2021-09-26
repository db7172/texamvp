import NavBar from "./components/navBar/NavBar";
import { useLocation } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter.tsx";
import Footer from "./components/footer/Footer";
import InfluencerRouter from "./pages/router/InfluencerRouter";
import InfluencerNavBar from "./components/navBar/influencer/InfluencerNavBar";

function App() {
  let location = useLocation();

  return (
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
  );
}

export default App;
