import "./style/App.scss";
import TopArticle from "./components/top-article";
import bottomRightImage from "./assets/images/bottom-right-image.jpg"
import bottomLeftImage from "./assets/images/bottom-left-image.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>room</h1>
        <nav>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <TopArticle articleId={1} />
        <article className="bottom-article">
          <img src={bottomLeftImage}></img>
          <section>
            <h2>ABOUT OUR FURNITURE</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste.Make each room unique, or pick a cohesive
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
