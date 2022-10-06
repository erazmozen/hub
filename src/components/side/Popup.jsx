import Button from "./Button";

const Popup = ({ icons }) => {
  return (
    <div className="settings-popup background-rounded">
      <Button icon={<icons.FaUser />} title="Profile" />
      <Button icon={<icons.FaPaintBrush />} title="Theme" />
      <Button icon={<icons.FaChevronRight />} title="Logout" />
    </div>
  );
};

export default Popup;
