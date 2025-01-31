import React, { useState } from "react";
import "../styles/WordCard.scss";

/* eslint-disable react/prop-types */
function WordCard({ word, transcription, translation, topic, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState(word);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedTranslation, setEditedTranslation] = useState(translation);
  const [editedTopic, setEditedTopic] = useState(topic);
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);

  const handleSave = () => {
    onEdit({ word: editedWord, transcription: editedTranscription, translation: editedTranslation, topic: editedTopic });
    setIsEditing(false);
  };

  return (
    <div className="word-card">
      {isEditing ? (
        <>
          <input type="text" value={editedWord} onChange={(e) => setEditedWord(e.target.value)} />
          <input type="text" value={editedTranscription} onChange={(e) => setEditedTranscription(e.target.value)} />
          <input type="text" value={editedTranslation} onChange={(e) => setEditedTranslation(e.target.value)} />
          <input type="text" value={editedTopic} onChange={(e) => setEditedTopic(e.target.value)} />
          <button className="save-btn" onClick={handleSave}>Сохранить</button>
          <button className="cancel-btn" onClick={() => setIsEditing(false)}>Отмена</button>
        </>
      ) : (
        <>
          <h3>{word}</h3>
          <p>Транскрипция: {transcription}</p>
          {isTranslationVisible ? (
            <p>Перевод: {translation}</p>
          ) : (
            <button className="show-translation-btn" onClick={() => setIsTranslationVisible(true)}>
              Показать перевод
            </button>
          )}
          <p>Тема: {topic}</p>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Редактировать</button>
          <button className="delete-btn" onClick={onDelete}>Удалить</button>
        </>
      )}
    </div>
  );
}

export default WordCard;
