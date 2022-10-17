import Portfolio from "../showpage/Portfolio";
import Projects from "../showpage/Projects";
import Notes from "../side/Notes";
import Poll from "../side/Poll";
import ProfileShowpage from "../side/ProfileShowpage";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ProfileShowpage icons={icons} />
      <Projects icons={icons} />
      <Poll />
      <Portfolio />
      <Notes />
    </div>
  );
};

export default ShowPage;
