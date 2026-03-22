import { Link } from "trial-ng-link";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <span className="navbar-brand text-white">Student Portal</span>

      <div>
        <Link className="text-white me-3" to="/">Home</Link>
        <Link className="text-white me-3" to="/about">About</Link>
        <Link className="text-white me-3" to="/services">Services</Link>
        <Link className="text-white" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;