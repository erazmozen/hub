import { useContext } from "react";
import { TogglesContext } from "../../contexts/TogglesContext";
import Button from "../common/Button";
import Clock from "./comps/Clock";
import "./header.css";

const Header = ({ icons }) => {
  const value = useContext(TogglesContext);
  console.log("Header render");
  return (
    <div className="header-wrapper card">
      <div className="common-icons-wrapper">
        <Button
          icon={<icons.BsToggles />}
          onClick={value.toggleSidebar}
        />
        <Button
          icon={<icons.BsReverseLayoutTextSidebarReverse />}
          onClick={value.toggleShowpage}
        />
        <Button
          icon={<icons.GrLinkedinOption />}
          href="www.linkedin.com/in/erazmozen"
        />
        <Button
          icon={<icons.FiGithub />}
          href="https://github.com/erazmozen"
        />
      </div>
      <Clock icons={icons} />
    </div>
  );
};

export default Header;
