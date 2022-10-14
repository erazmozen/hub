import { useState } from "react";
import "../css/side/poll.css";

const Poll = () => {
  const [poll, setPoll] = useState({ yes: 8351231236, no: 2573, voted: null });

  function changeYesPoll() {
    if (poll.voted) return;
    setPoll((prev) => ({ ...prev, yes: prev.yes + 1, voted: 1 }));
  }

  function changeNoPoll() {
    if (poll.voted) return;
    setPoll((prev) => ({ ...prev, no: prev.no + 1, voted: 1 }));
  }

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
          <h2 onClick={changeYesPoll}>Yes</h2>
          <h3>yesCount ( {poll.yes} )</h3>
        </div>
        <div className="no-bar">
          <h2 value="no" onClick={changeNoPoll}>
            No
          </h2>
          <h3>noCount ( {poll.no} )</h3>
        </div>
      </div>

      {!poll.voted && <h3>U can vote only once!</h3>}
      {poll.voted && <h3>Thanks for voting!</h3>}
    </div>
  );
};

export default Poll;
