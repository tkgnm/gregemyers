import { useState } from "preact/hooks";
import "./app.css";
import headerImage from "./img/New-Title-Banter-Website.jpeg";

export function App() {
  return (
    <>
      <div>
        <img src={headerImage} class="logo" alt="Banner: Greg E Myers" />
      </div>
      <h1>This is where the nav bar will go</h1>
      <div class="card">
        <p>This is where the body will go </p>
      </div>
    </>
  );
}
