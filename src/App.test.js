import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import TopArticle from "./components/top-article";
import { unmountComponentAtNode } from "react-dom";
import listOfArticles from "./data";

test("renders shop now link", () => {
  render(<App />);
  const linkElement = screen.getByText(/SHOP NOW/i);
  expect(linkElement).toBeInTheDocument();
});


describe("test top article change slide", () => {
  test("test change slide container with desktop version", () => {
    render(<TopArticle articleId={1} />);
    expect(
      screen.getByTestId("change-slide-container-desktop")
    ).toBeInTheDocument();
  });

  test("test change slide container with mobile version", () => {
    render(<TopArticle articleId={1} mobile={true} />);
    expect(
      screen.getByTestId("change-slide-container-mobile")
    ).toBeInTheDocument();
  });
});

describe("test App change slide for text and image", () => {
  test("test text change when click on right arrow div", () => {
    render(<App />);
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[0].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[0].text
    );
    fireEvent.click(screen.queryByTestId("right-arrow"));
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[1].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[1].text
    );
  });

  test("test text change when click on right arrow div when arrived to final item", () => {
    render(<App />);
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[0].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[0].text
    );
    //We forward to the end of the list items with multiple clicks
    for (let i = 0; i < listOfArticles.length-1; i++) {
      fireEvent.click(screen.queryByTestId("right-arrow"));
    }
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[listOfArticles.length-1].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[listOfArticles.length-1].text
    );
    //One last click to check if it it goes back to the first item
    fireEvent.click(screen.queryByTestId("right-arrow"));
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[0].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[0].text
    );
  });

  test("test text change when click on left arrow div when arrived to first item", () => {
    render(<App />);
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[0].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[0].text
    );
    fireEvent.click(screen.queryByTestId("left-arrow"));
    expect(screen.queryByTestId("article-title")).toHaveTextContent(
      listOfArticles[listOfArticles.length-1].title
    );
    expect(screen.queryByTestId("article-text")).toHaveTextContent(
      listOfArticles[listOfArticles.length-1].text
    );
  });
});
