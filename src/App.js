import "./main.css";
import icons from "./icons";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <Header icons={icons} />

      <div className="sidebar-wrapper background-rounded">
        <div className="sidebar-top">
          <div className="search-wrapper">
            <input placeholder="Search" />
          </div>
          <div className="todo">
            <div className="todo-icons">
              <icons.FiPlusSquare />
              <icons.FiFilter />
            </div>
            <ul>
              <li>
                <icons.FiMinusSquare />
                <h4 className="todo-title">Lets put some</h4>
              </li>
              <li>
                <icons.FiMinusSquare />
                <h4 className="todo-title">Random text here</h4>
              </li>
              <li>
                <icons.FiMinusSquare />
                <h4 className="todo-title">To show some todos</h4>
              </li>
            </ul>
          </div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
        <div className="sidebar-bottom">
          <div>+38154443123</div>
        </div>
      </div>
      <div className="footer-wrapper background-rounded">Footer</div>
    </div>
  );
}

export default App;
