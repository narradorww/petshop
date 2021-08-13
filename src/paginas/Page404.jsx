import React from "react";
import imagem from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Page404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img
        className="doguito-imagem"
        src={imagem}
        alt="Error: Page not found"
      />
      <p className="naoencontrado">Ops, Essa página não existe</p>
    </main>
  );
};

export default Page404;
