import "./header.css";
import Clock from "./comps/Clock";
import DataContext from "../../contexts/DataContext";

const Header = ({ icons }) => {
  console.log("Header render");

  return (
    <div className="header-wrapper background-rounded">
      <div className="logo-wrapper">
        <DataContext.Consumer>
          {(functions) => (
            <button onClick={functions.toggleSidebar}>
              <icons.BsToggles />
            </button>
          )}
        </DataContext.Consumer>
        <div className="icons-wrapper">
          <icons.GrLinkedinOption />
          <icons.FiGithub />
          <icons.FiBookOpen />
        </div>
      </div>

      <Clock icons={icons} />
    </div>
  );
};

export default Header;
