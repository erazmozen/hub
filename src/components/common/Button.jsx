const Button = ({
  icon,
  type,
  title,
  onClick,
  href,
  value,
  style,
  target,
}) => {
  console.log("Button render");
  return (
    <>
      {href && (
        <a href={href} target={target} rel="noreferrer">
          {icon} {title}
        </a>
      )}
      {!href && (
        <button
          type={type}
          value={value}
          onClick={onClick}
          className="common-button"
          style={style}
        >
          {icon} {title}
        </button>
      )}
    </>
  );
};

export default Button;
