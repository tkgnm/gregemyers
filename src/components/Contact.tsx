import { Divider } from "./Divider";

export const Contact = () => {
  return (
    <>
      <div style={`max-width: 768px; margin:0 auto;`}>
        <h2>Contact</h2>
        <p> Please enquire for sales, commissions and gallery shows. </p>
        Email: contact@gregemyers.com <br />
        Instagram:{" "}
        <a href="https://www.instagram.com/gregemyers" target="_blank">
          @gregemyers
        </a>
        <br />
        <br />
      </div>
      <Divider />
    </>
  );
};
