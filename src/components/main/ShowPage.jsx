import Portfolio from "../showpage/Portfolio";
import Notes from "../side/Notes";
import Poll from "../side/Poll";
import ProfileShowpage from "../side/ProfileShowpage";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ProfileShowpage icons={icons} />
      <Portfolio icons={icons} />
      <Notes icons={icons} />
      <Poll />
    </div>
  );
};

export default ShowPage;
