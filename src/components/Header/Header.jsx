import { useContext } from "react";
import { IconsContext } from "../../contexts/IconsContext";
import { TogglesContext } from "../../contexts/TogglesContext";
import Button from "../common/Button";
import Clock from "./comps/Clock";
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
          href="www.linkedin.com/in/erazmozen"
        />
        <Button
          icon={<FiGithub />}
          href="https://github.com/erazmozen"
        />
      </div>
      <Clock />
    </div>
  );
};

export default Header;
