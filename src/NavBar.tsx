import { Router } from "preact-router";
import { Link } from "preact-router/match";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <Link activeClassName="active" href="/">
          Home
        </Link>
        <Link activeClassName="active" href="/about">
          About
        </Link>
      </nav>
    </div>
  );
};
