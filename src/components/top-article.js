import React from "react";
import listOfArticles from "../data";
import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";

export default function TopArticle({
  articleId,
  handleNextArticle,
  handlePreviousArticle,
}) {
  return (
    <article className="top-article">
      <img src={listOfArticles[articleId].image}></img>
      <section>
        <div className="top-article__text">
          <h2>{listOfArticles[articleId].title}</h2>
          <p>{listOfArticles[articleId].text}</p>
          <p className="shop-now">
            <a>SHOP NOW</a>
            <img className="shop-now__arrow" src={arrow}></img>
          </p>
        </div>
        <div className="changeSlide">
          <img src={angleLeft} onClick={handlePreviousArticle}></img>
          <img src={angleRight} onClick={handleNextArticle}></img>
        </div>
      </section>
    </article>
  );
}
