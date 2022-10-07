import "../css/side/sidebartaskbar.css";

const SidebarTaskbar = ({ icons, toggleSidebarTaskbar, toggleTaskbar }) => {
  return (
    <div
      className={
        toggleSidebarTaskbar
          ? "sidebar-taskbar sidebar-taskbar-vertical"
          : "sidebar-taskbar"
      }
    >
      <icons.BsReverseLayoutSidebarInsetReverse onClick={toggleTaskbar} />
      <icons.BsReverseLayoutTextSidebarReverse size={22} />
    </div>
  );
};

export default SidebarTaskbar;
