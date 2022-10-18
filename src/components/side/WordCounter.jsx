import React from "react";

function WordCounter({ toCount, icons }) {
  const splitByWord = toCount.split(" ");
  const splitByChar = toCount.split("");

  return (
    <div className="counter">
      <icons.VscSymbolKeyword />
      {splitByWord.length}
      <icons.CgGhostCharacter />
      {splitByChar.length}
    </div>
  );
}

export default WordCounter;
