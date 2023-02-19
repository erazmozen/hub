import { Link } from "react-router-dom";
import "./mainlinks.css";

const SidebarLinks = () => {
  return (
    <div className="router-links">
      <Link className="common-button" to="">
        Home
      </Link>
      {/* <Link className="common-button" to="/hub"> */}
      {/*   Portfolio */}
      {/* </Link> */}
      <Link className="common-button" to="/hub/applets">
        Applets
      </Link>
    </div>
  );
};

export default SidebarLinks;
