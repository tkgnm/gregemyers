import { useState } from "preact/hooks";
import "./app.css";
import headerImage from "./img/New-Title-Banter-Website.jpeg";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={headerImage} class="logo" alt="Header banner" />
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
