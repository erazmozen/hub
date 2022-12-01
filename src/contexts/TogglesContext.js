import { createContext, useState } from "react";

const TogglesContext = createContext(null);

const TogglesContextProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [showpageToggle, setShowpageToggle] =
    useState(true);
  console.log("Context");

  function toggleSidebar() {
    setSidebarToggle((prev) => (prev = !prev));
    console.log("sidebar toggled, state:", !sidebarToggle);
  }

  function toggleShowpage() {
    setShowpageToggle((prev) => (prev = !prev));
    console.log(
      "showpage toggled, state:",
      !showpageToggle
    );
  }

  const value = {
    toggleSidebar,
    toggleShowpage,
    sidebarToggle,
    showpageToggle,
  };

  return (
    <TogglesContext.Provider value={value}>
      {children}
    </TogglesContext.Provider>
  );
};

export { TogglesContext, TogglesContextProvider };
