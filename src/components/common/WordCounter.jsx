function WordCounter({ toCount, icons }) {
  const splitByWord = toCount.match(/[\w\d\’\'-]+/gi);
  const splitByChar = toCount.trim().length;

  return (
    <div className="counter">
      {splitByWord ? splitByWord.length : 0}
      <icons.FaRegFileWord size={14} />
      {splitByChar}
      <icons.CgGhostCharacter />
    </div>
  );
}

export default WordCounter;
