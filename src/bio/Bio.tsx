import "../app.css";
import { render } from "preact";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/NavBar";
import { Gallery } from "../components/Gallery";
import { useState, useEffect } from "preact/hooks";

export const Bio = () => {
  const [html, setHtml] = useState("Loading...");
  let BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;
  useEffect(() => {
    fetch("https://gregemyers-api-fly.fly.dev/api/bio", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHtml(data.data.attributes.text);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Banner />
      <NavBar />
      <div style={`max-width: 768px; margin:0 auto;`}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Gallery />
      <br />
      All content on this site ©️ Greg E Myers
    </>
  );
};
