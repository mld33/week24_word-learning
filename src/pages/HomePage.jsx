import React from "react";
import WordList from "../components/WordList";
import words from "../data/words";
import "../styles/Table.scss";

function HomePage() {
  return (
    <main className="home-page">
      <h2>📚 Список слов</h2>
      <WordList initialWords={words} />
    </main>
  );
}

export default HomePage;
