import React from "react";
import listOfArticles from "../data";
import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";
import { useMediaQuery } from "react-responsive";

export default function TopArticle({
  articleId,
  handleNextArticle,
  handlePreviousArticle,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 895px)" });

  return (
    <article className="top-article">
      {/* If mobile/tablet width, the change-slide-container appear inside the image */}
      {isMobile ? (
        <div className="mobile-top-article-img-container">
          <img
            className="top-article__image"
            src={
              isMobile
                ? listOfArticles[articleId].mobileImage
                : listOfArticles[articleId].image
            }
          />
          <div className="change-slide-container">
            <div className="arrow-container" onClick={handlePreviousArticle}>
              <img src={angleLeft}></img>
            </div>
            <div className="arrow-container" onClick={handleNextArticle}>
              <img src={angleRight}></img>
            </div>
          </div>
        </div>
      ) : (
        <img
          className="top-article__image"
          src={
            isMobile
              ? listOfArticles[articleId].mobileImage
              : listOfArticles[articleId].image
          }
        />
      )}
      <div className="top-article__right-corner">
        <section>
          <div className="top-article__text">
            <h2>{listOfArticles[articleId].title}</h2>
            <p>{listOfArticles[articleId].text}</p>
            <p className="shop-now">
              <a>SHOP NOW</a>
              <img className="shop-now__arrow" src={arrow}></img>
            </p>
          </div>
        </section>
        {/* If desktop width, the change-slide-container appear in the corner of the text section */}
        {isMobile ? (
          ""
        ) : (
          <div className="change-slide-container">
            <div className="arrow-container" onClick={handlePreviousArticle}>
              <img src={angleLeft}></img>
            </div>
            <div className="arrow-container" onClick={handleNextArticle}>
              <img src={angleRight}></img>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
