import Slider from "./components/Slider";
import LikeLogo from "./components/LikeLogo";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signUp">SignUp</Link>
            </li>
            <li>
              <Link to="/slider">Slider</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={LoginForm()} />
          <Route path="/signUp" element={SignUp()} />
          <Route path="/slider" element={[Slider(), LikeLogo()]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
