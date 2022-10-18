import Portfolio from "../showpage/Portfolio";
import Notes from "../side/Notes";
import Poll from "../side/Poll";
import ProfileShowpage from "../side/ProfileShowpage";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ProfileShowpage icons={icons} />
      <Poll />
      <Portfolio icons={icons} />
      <Notes icons={icons} />
    </div>
  );
};

export default ShowPage;
