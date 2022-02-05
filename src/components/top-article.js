import React from "react";
import listOfArticles from "../data";
import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";
import arrow from "../assets/images/icon-arrow.svg";

export default function TopArticle({
  mobile = false,
  articleId,
  handleNextArticle,
  handlePreviousArticle,
}) {
  return (
    <article className="top-article">
      {/* If mobile/tablet width, the change-slide-container appear inside the image */}
      {mobile ? (
        <div className="mobile-top-article-img-container">
          <img
            alt=""
            className="top-article__image"
            data-testid="changing-image"
            src={listOfArticles[articleId].mobileImage}
          />
          <div
            className="change-slide-container"
            data-testid="change-slide-container-mobile"
          >
            <div
              data-testid="left-arrow"
              tabIndex="0"
              role="button"
              aria-label="change slide"
              className="arrow-container"
              onClick={handlePreviousArticle}
              onKeyUp={(event) => {
                if (event.code === "Enter") handlePreviousArticle();
              }}
            >
              <img alt="left arrow" src={angleLeft}></img>
            </div>
            <div
              data-testid="right-arrow"
              tabIndex="0"
              role="button"
              aria-label="change slide"
              className="arrow-container"
              onClick={handleNextArticle}
              onKeyUp={(event) => {
                if (event.code === "Enter") handleNextArticle();
              }}
            >
              <img alt="right arrow" src={angleRight}></img>
            </div>
          </div>
        </div>
      ) : (
        <img
          data-testid="changing-image"
          alt=""
          className="top-article__image"
          src={listOfArticles[articleId].image}
        />
      )}
      <div className="top-article__right-corner">
        <section>
          <div className="top-article__text">
            <h2 data-testid="article-title">
              {listOfArticles[articleId].title}
            </h2>
            <p data-testid="article-text">{listOfArticles[articleId].text}</p>
            <p tabIndex="0" role="link" className="shop-now">
              <a>SHOP NOW</a>
              <img alt="arrow" className="shop-now__arrow" src={arrow}></img>
            </p>
          </div>
        </section>
        {/* If desktop width, the change-slide-container appear in the corner of the text section */}
        {mobile ? (
          ""
        ) : (
          <div
            className="change-slide-container"
            data-testid="change-slide-container-desktop"
          >
            <div
              data-testid="left-arrow"
              tabIndex="0"
              role="button"
              aria-label="change slide"
              className="arrow-container"
              onClick={handlePreviousArticle}
              onKeyUp={(event) => {
                if (event.code === "Enter") handlePreviousArticle();
              }}
            >
              <img alt="left arrow" src={angleLeft}></img>
            </div>
            <div
              data-testid="right-arrow"
              tabIndex="0"
              role="button"
              aria-label="change slide"
              className="arrow-container"
              onClick={handleNextArticle}
              onKeyUp={(event) => {
                if (event.code === "Enter") handleNextArticle();
              }}
            >
              <img alt="right arrow" src={angleRight}></img>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
