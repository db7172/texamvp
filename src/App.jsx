import NavBar from "./components/navBar/NavBar";
import { useLocation } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter.tsx";
import Footer from "./components/footer/Footer";
import InfluencerRouter from "./pages/router/InfluencerRouter";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname.includes("influencer") ? (
        <InfluencerRouter />
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
