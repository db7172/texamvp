import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter.tsx";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
