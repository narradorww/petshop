import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from "./../api/api";

const ListaPost = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, []);

  return (
    <section className="posts container">
      {posts.map((posts) => (
        <Link className={`cartao-post cartao-post--${posts.categoria}`}>
          <article key={posts.id}>
            <h3 className="cartao-post__titulo">{posts.title}</h3>
            <p className="cartao-post__meta>">{posts.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaPost;
