import "./style/App.scss";
import React from "react";
import TopArticle from "./components/top-article";
import bottomRightImage from "./assets/images/bottom-right-image.jpg";
import bottomLeftImage from "./assets/images/bottom-left-image.jpg";

function App() {
  const [selectedArticle, setSelectedArticle] = React.useState(0);

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
        <nav>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
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
    </div>
  );
}

export default App;
