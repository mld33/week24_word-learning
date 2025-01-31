import React, { useState } from "react";
import WordCard from "./WordCard";
import "../styles/WordList.scss";
/* eslint-disable react/prop-types */

function WordList({ initialWords }) {
  const [words, setWords] = useState(initialWords);

  const handleEdit = (index, updatedWord) => {
    const updatedWords = [...words];
    updatedWords[index] = updatedWord;
    setWords(updatedWords);
  };

  const handleDelete = (index) => {
    setWords(words.filter((_, i) => i !== index));
  };

  return (
    <div className="word-list">
      {words.map((word, index) => (
        <WordCard
          key={index}
          {...word}
          onEdit={(updatedWord) => handleEdit(index, updatedWord)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default WordList;
