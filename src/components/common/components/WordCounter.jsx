import icons from "../../../icons";

function WordCounter({ toCount }) {
  const splitByWord = toCount.match(/[\w\d-]+/gi);
  const splitByChar = toCount.trim().length;

  return (
    <div className="counter">
      <p>{splitByWord ? splitByWord.length : 0}</p>
      <icons.VscSymbolKeyword size={24} />
      <p>{splitByChar}</p>
      <icons.CgGhostCharacter size={24} />
    </div>
  );
}

export default WordCounter;
