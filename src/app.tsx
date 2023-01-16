import "./app.css";
import Router, { Route } from "preact-router";
import { Home } from "./components/Home";
import { Bio } from "./components/Bio";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";

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
