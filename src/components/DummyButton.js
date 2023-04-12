const DummyButton = ({
  message = "No message",
  btnName = "Click me!!",
  color = "orange",
}) => {
  const displayName = () => {
    alert(message);
  };
  return (
    <button onClick={displayName} style={{ backgroundColor: color }}>
      {btnName}
    </button>
  );
};

export default DummyButton;
