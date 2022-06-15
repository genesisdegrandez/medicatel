import Button from "@mui/material/Button";

const Buttons = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
export default Buttons;
