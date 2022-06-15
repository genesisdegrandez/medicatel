const Image = (props) => {
  return (
    <img
      src={props.source}
      className={props.className}
      onClick={props.onClick}
    />
  );
};
export default Image;
