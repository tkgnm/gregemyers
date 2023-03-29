import { Link } from "preact-router/match";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/bio">
              Bio
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/gregemyers/" target="_blank">
              Instagram ⬈
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
