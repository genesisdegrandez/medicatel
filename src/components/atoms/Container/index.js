import Container from "@mui/material/Container";

const Containers = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
export default Containers;
