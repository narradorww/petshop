import React, { useEffect, useState } from "react";
import { busca } from "../api/api";
import "../assets/css/post.css";
import { useParams, useHistory } from "react-router-dom";

const Post = () => {
  // o hook useHistory vai verificar se o historico do usuário possui a rota setada em useState. Caso não tenha ele encaminha para a rota 404
  let history = useHistory();
  //o hook useParams serve para conectar o id determinado em setState ao destino do Router, lá em App.jsx. Para isso é preciso inserir ":"  após a rota desejada
  const { id } = useParams();
  //chamada do hook useState para que seja possivel cerificar o estado atual e determinar a ação que irá modifica-lo com useEffect
  const [post, setPost] = useState({});
  //chamada do hook useEffect para que determinar qual o post.id será exibido
  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      history.push(`/404`);
    });
  }, [id]);

  return (
    <main className="container> flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto"> {post.body} </p>
      </article>
    </main>
  );
};

export default Post;
