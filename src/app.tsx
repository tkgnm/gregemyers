import "./app.css";
import Router, { Route } from "preact-router";
import { Home } from "./components/Home";
import { Bio } from "./components/Bio";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Content } from "./components/Content";
import { galleryItems } from "./fixtures/galleryItems";

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
      {/* <Content /> */}

      {/* actual page content should go here, defaults to blank if on the home page */}
      <Router>
        <Route path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact} />
        {galleryItems.map((item) => (
          <Content path={`${item.id}`} content={`${item.content}`} />
        ))}
      </Router>
      <Gallery />
    </>
  );
}
