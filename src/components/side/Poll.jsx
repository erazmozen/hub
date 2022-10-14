import { useState } from "react";
import "../css/side/poll.css";

const Poll = () => {
  const [poll, setPoll] = useState({ yes: 13512336, no: 203573, voted: null });

  function changePoll(e) {
    if (poll.voted) return;
    if (e.target.dataset.payload === "yes") {
      setPoll((prev) => ({ ...prev, yes: prev.yes + 1, voted: 1 }));
    } else {
      setPoll((prev) => ({ ...prev, no: prev.no + 1, voted: 1 }));
    }
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
          <h2 onClick={changePoll} data-payload="yes">
            Yes
          </h2>
          <h3>{poll.yes}</h3>
        </div>
        <div className="no-bar" data-payload="no">
          <h2 onClick={changePoll}>No</h2>
          <h3>{poll.no}</h3>
        </div>
      </div>

      {!poll.voted && <h3>U can vote only once!</h3>}
      {poll.voted && <h3>Thanks for voting!</h3>}
    </div>
  );
};

export default Poll;
