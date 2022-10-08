import "../css/side/sidebartaskbar.css";

const SidebarTaskbar = ({ icons, toggleSidebarTaskbar, toggleTaskbar, toggleShowpage }) => {
  console.log('SidebarTaskbar render')
  return (
    <div
      className={
        toggleSidebarTaskbar
          ? "sidebar-taskbar sidebar-taskbar-vertical"
          : "sidebar-taskbar"
      }
    >
      <icons.BsReverseLayoutSidebarInsetReverse onClick={toggleTaskbar} />
      <icons.BsReverseLayoutTextSidebarReverse onClick={toggleShowpage} size={22} />
    </div>
  );
};

export default SidebarTaskbar;
