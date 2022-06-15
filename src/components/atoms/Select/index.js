import Select from "@mui/material/Select";

const { Option } = Select;

export { Option };

const Selects = ({ children, ...rest }) => {
  return <Select {...rest}>{children}</Select>;
};

export default Selects;
