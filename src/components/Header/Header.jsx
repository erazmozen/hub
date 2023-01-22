import { useContext } from "react";
import { IconsContext } from "../../contexts/IconsContext";
import { TogglesContext } from "../../contexts/TogglesContext";
import Clock from "./comps/Clock";
import Button from "../common/Button";
import "./header.css";

const Header = () => {
  const {
    GrLinkedinOption,
    FiGithub,
    BsToggles,
    BsReverseLayoutTextSidebarReverse,
  } = useContext(IconsContext);

  const value = useContext(TogglesContext);

  console.log("Header render");
  return (
    <div className="card header-wrapper">
      <div className="common-icons-wrapper">
        <Button
          icon={<BsToggles />}
          onClick={value.toggleSidebar}
        />
        <Button
          icon={<BsReverseLayoutTextSidebarReverse />}
          onClick={value.toggleShowpage}
        />
        <Button
          icon={<GrLinkedinOption />}
          href="https://www.linkedin.com/in/erazmozen"
          target="_blank"
        />
        <Button
          icon={<FiGithub />}
          href="https://github.com/erazmozen"
          target="_blank"
        />
      </div>
      <Clock />
    </div>
  );
};

export default Header;
