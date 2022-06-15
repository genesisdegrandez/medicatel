import React from "react";
import { Grid, Image } from "../../components/atoms";
import { TLogin } from "../../components/templates";
import urlImage from "../../assets/login.png";
import "./style.css";

const Login = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div className="div-container-login">
            <Image source={urlImage} className="img-login" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <TLogin />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
