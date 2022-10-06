const Button = ({ icon, title }) => {
  return (
    <button className="common-button">
      {icon} {title}
    </button>
  );
};

export default Button;
