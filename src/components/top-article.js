import React from "react";
import listOfArticles from "../data";

export default function TopArticle({ articleId }) {
  return (
    <article className="top-article">
      <img src={listOfArticles[articleId].image}></img>
      <section>
        <h2>{listOfArticles[articleId].title}</h2>
        <p>{listOfArticles[articleId].text}</p>
        <p>
          <a>SHOP NOW</a>
        </p>
      </section>
    </article>
  );
}
