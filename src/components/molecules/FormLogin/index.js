import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Grid,
  TextField,
} from "../../atoms";
//
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useHistory } from "react-router-dom";

const FormLogin = () => {
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    history.push("/Empresa");
    console.log("Me distes click");
  };
  return (
    <Container>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          id="outlined-basic"
          label="Correo Electronico"
          variant="outlined"
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-password">
          Contraseña
        </InputLabel>

        <OutlinedInput
          label="Contraseña"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <label>¿Olvidastes tu contraseña?</label>
      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <Button variant="contained" onClick={handleClick}>
          Ingresar
        </Button>
      </FormControl>

      <label>¿No tienes una cuenta? Registrate</label>
    </Container>
  );
};

export default FormLogin;
