import Box from "@mui/material/Box";

const Boxs = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};
export default Boxs;
