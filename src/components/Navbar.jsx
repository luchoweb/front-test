import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button className="nav__hamburger icon-button" alt="Open Menu">
          <img src="/assets/img/hamburger.svg" alt="Menu" />
        </button>
        <ul className="nav__links">
          <li>
              <Link to="/past-trials">Past Trials</Link>
          </li>
          <li>
              <Link to="/how-it-works">How It Works</Link>
          </li>
          <li>
              <Link to="/login">Login / Sign Up</Link>
          </li>
          <li>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="nav__search-input" aria-label="search" type="text" />
              <button className="nav__search icon-button" alt="Search" type="submit">
                <img src="/assets/img/search.svg" alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
