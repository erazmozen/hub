import "./sidebartaskbar.css";
import DataContext from "../../contexts/DataContext";

const SidebarTaskbar = ({ icons }) => {
  console.log("SidebarTaskbar render");
  return (
    <div className="sidebar-taskbar">
      <DataContext.Consumer>
        {(functions) => {
          return (
            <icons.BsReverseLayoutTextSidebarReverse
              onClick={functions.toggleShowpage}
              size={22}
            />
          );
        }}
      </DataContext.Consumer>
    </div>
  );
};

export default SidebarTaskbar;
