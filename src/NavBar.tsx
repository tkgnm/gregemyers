import { Link } from "preact-router/match";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <Link activeClassName="active" href="/">
          Home
        </Link>
        <Link activeClassName="active" href="/bio">
          Bio
        </Link>
        <Link href="https://www.instagram.com/gregemyers/" target="_blank">
          Instagram
        </Link>
        <Link activeClassName="active" href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};
