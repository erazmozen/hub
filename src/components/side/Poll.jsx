import "../css/side/poll.css";

const Poll = () => {
  return (
    <div className="poll-wrapper">
      <div className="question-wrapper">
        <h3>Pitanje naslov</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </p>
        <p>What do u think?</p>
      </div>
      <div className="vote-wrapper">
        <div className="yes-bar">
          <h2>Yes</h2>
          <h3>yesCount ( 8356 )</h3>
        </div>
        <div className="no-bar">
          <h2>No</h2>
          <h3>noCount ( 2573 )</h3>
        </div>
      </div>
    </div>
  );
};

export default Poll;
