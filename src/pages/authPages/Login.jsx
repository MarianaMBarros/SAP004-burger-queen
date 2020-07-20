import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import logo from "../../img/logo1.png";
// import ReturnError from "./authError";
import "./style.css";

// import firebase from '../../firebase/firebase';
// const email = "ma@ma.com";
// const password = "123456";
// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password);

const App = () => {
  return (
    <div className="templateAuth">
      <img className="img" src={logo} alt="logo" />
      <h2>Bem Vindo(a)!</h2>
      <Input type="text" placeholder="Email*" />
      <Input type="text" placeholder="Senha*" />
      <div id="error"></div>
      <Button value="Entrar" />
      <span>
        Não possui uma conta?{" "}
        <Link className="link" to="/register">
          Cadastre-se
        </Link>
      </span>
    </div>
  );
};

export default App;
