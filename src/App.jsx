import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
