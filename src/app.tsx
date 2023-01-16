import "./app.css";
import Router, { Route } from "preact-router";
import { Home } from "./Home";
import { Bio } from "./Bio";
import { NavBar } from "./NavBar";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";

export function App() {
  return (
    <>
      <div>
        <img
          src="https://gem.blipdiscs.com/img/banner.jpeg"
          class="banner"
          alt="Banner: Greg E Myers"
        />
      </div>
      <NavBar />
      <Gallery />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact} />
      </Router>
    </>
  );
}
