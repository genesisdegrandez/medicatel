import TextField from "@mui/material/TextField";

const TextFields = ({ children, ...rest }) => {
  return <TextField {...rest}>{children}</TextField>;
};

export default TextFields;
