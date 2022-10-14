import "../css/side/poll.css";

const Poll = () => {
  return (
    <div className="poll-wrapper">
      <div className="question-wrapepr">
        <h3>Pitanje naslov</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </p>
        <p>What do u think?</p>
      </div>
      <div className="vote-wrapper">
        <div className="yes-no-buttons">
          <h2>Yes</h2>
          <h2>No</h2>
        </div>
        <div className="progressbar">
          <div className="yes-progressbar">
            <h3>yesCount</h3>
          </div>
          <div className="no-progressbar">
            <h3>noCount</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poll;
