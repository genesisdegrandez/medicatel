import TextField from '@material-ui/core/TextField';

const TextFields = ({ children, ...rest }) => {
    return <TextField {...rest}>{children}</TextField>;
  };
  
  export default TextFields;