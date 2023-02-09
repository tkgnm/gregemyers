import "./app.css";
import Router, { Route } from "preact-router";
import { Home } from "./components/Home";
import { Banner } from "./components/Banner";
import { Bio } from "./components/Bio";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Content } from "./components/Content";
import { galleryItems } from "./fixtures/galleryItems";

export function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact} />
        {galleryItems.map((item) => (
          <Content
            path={`${item.title
              .replace(/[^a-zA-Z0-9 -]|[\s]/gu, "")
              .toLowerCase()}`}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            pictures={item.pictures}
            date={item.date}
          />
        ))}
      </Router>
      <Gallery />
    </>
  );
}
