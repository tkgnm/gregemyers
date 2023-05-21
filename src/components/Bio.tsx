import { Divider } from "./Divider";
import { useState, useEffect } from "preact/hooks";

export const Bio = () => {
  const [html, setHtml] = useState("Loading...");

  useEffect(() => {
    fetch("https://gregemyers-api-fly.fly.dev/api/bio", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
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
      <div style={`max-width: 768px; margin:0 auto;`}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Divider />
    </>
  );
};
