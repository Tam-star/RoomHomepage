import "normalize.css"
import "./style/App.scss";
import React from "react";
import TopArticle from "./components/top-article";
import bottomRightImage from "./assets/images/bottom-right-image.jpg";
import bottomLeftImage from "./assets/images/bottom-left-image.jpg";
import menuIcon from "./assets/images/icon-hamburger.svg";
import { useMediaQuery } from "react-responsive";
import HeaderMenu from "./components/header-menu";

function App() {
  const [selectedArticle, setSelectedArticle] = React.useState(0);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 575px)" });

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const handleNextArticle = () => {
    if (selectedArticle === 2) {
      setSelectedArticle(0);
    } else {
      setSelectedArticle(selectedArticle + 1);
    }
  };

  const handlePreviousArticle = () => {
    if (selectedArticle === 0) {
      setSelectedArticle(2);
    } else {
      setSelectedArticle(selectedArticle - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>room</h1>
        {isTabletOrMobile && openMobileMenu ? (
          <HeaderMenu mobile={true} handleCloseIcon={handleMobileMenu} />
        ) : (
          ""
        )}
        {isTabletOrMobile ? (
          <img className="menu-icon" src={menuIcon} onClick={handleMobileMenu}/>
        ) : (
          <HeaderMenu />
        )}
      </header>
      <main>
        <TopArticle
          articleId={selectedArticle}
          handleNextArticle={handleNextArticle}
          handlePreviousArticle={handlePreviousArticle}
        />
        <article className="bottom-article">
          <img src={bottomLeftImage}></img>
          <section>
            <h2>ABOUT OUR FURNITURE</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </section>
          <img src={bottomRightImage}></img>
        </article>
      </main>
      {openMobileMenu ? <div className="shadow"></div> : ''}
    </div>
  );
}

export default App;
