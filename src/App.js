import "./main.css";

function App() {
  return (
    <div>
      <div>
        <div className="header-wrapper background-rounded">
          <div className="logo-wrapper">
            <h3>Er</h3>
            <div className="icons-wrapper">
              <p>Git</p>
              <p>LinkedIn</p>
              <p>Contact</p>
            </div>
          </div>
          <div>Clock</div>
          <div>Settings</div>
        </div>
      </div>
      <div className="sidebar-wrapper background-rounded">
        <div className="sidebar-top">
          <div>Search</div>
          <div>Todo</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
        <div className="sidebar-bottom">
          <div>+38154443123</div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
