const Button = ({ icon, title }) => {
  console.log('Button render')
  return (
    <button className="common-button">
      {icon} {title}
    </button>
  );
};

export default Button;
