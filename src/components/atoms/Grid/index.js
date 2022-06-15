import Grid from "@mui/material/Grid";

const Grids = ({ children, ...rest }) => {
  return <Grid {...rest}>{children}</Grid>;
};
export default Grids;
