import "./footer.css";
// import { useContext } from "react";
// import { TogglesContext } from "../../contexts/TogglesContext";

const Footer = () => {
  // const value = useContext(TogglesContext);
  console.log("Footer render");
  return (
    <div className="footer-wrapper background-rounded">
      <p>Contact phone: +381641199057</p>
      <p>Email: erazmozen@protonmail.com</p>
    </div>
  );
};

export default Footer;
