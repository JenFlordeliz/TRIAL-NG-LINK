import { BrowserRouter as Router, Routes, Route, Link } from "trial-ng-link";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>

      {/* Navbar (Bootstrap) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Student Portal</span>

          <div>
            <Link className="nav-link d-inline text-white" to="/">Home</Link>
            <Link className="nav-link d-inline text-white" to="/about">About</Link>
            <Link className="nav-link d-inline text-white" to="/services">Services</Link>
            <Link className="nav-link d-inline text-white" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Pages */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;