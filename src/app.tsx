import "./app.css";
import headerImage from "./img/New-Title-Banter-Website.jpeg";
import Router, { Route } from "preact-router";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";

export function App() {
  return (
    <>
      <div>
        <img src={headerImage} class="logo" alt="Banner: Greg E Myers" />
      </div>
      <NavBar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
}
