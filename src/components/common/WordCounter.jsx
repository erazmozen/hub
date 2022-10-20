import React from "react";

function WordCounter({ toCount, icons }) {
  const splitByWord = toCount.split(" ");
  const splitByChar = toCount.split("");

  return (
    <div className="counter">
      {splitByWord.length}
      <icons.FaRegFileWord size={14} />
      {splitByChar.length}
      <icons.CgGhostCharacter />
    </div>
  );
}

export default WordCounter;
