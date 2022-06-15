import FormControl from "@mui/material/FormControl";

const FormControls = ({ children, ...rest }) => {
  return <FormControl {...rest}>{children}</FormControl>;
};
export default FormControls;
