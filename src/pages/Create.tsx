import React, { useEffect, useState } from "react";
import useDatabaseFirebase from "../components/hooks/useDatabaseFirebase";
import { databaseData } from "../firebase";
import useAuthFirebase from "../components/hooks/useAuthFirebase";
import { useLocation, useNavigate } from "react-router-dom";
import Tab from "../components/utils/Tab";
import { Card } from "../type.df";

export default function Create() {
  const navigate = useNavigate();
  const { state } = useLocation(); // state has type of unknown, so i decided to create a new state, originalCard
  const { cards, writeToDatabase, updateDatabase, deleteFromDatabase } =
    useDatabaseFirebase();
  const { checkIsAllowed } = useAuthFirebase();
  const [originalCard, setOriginalCard] = useState<Card>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [source, setSource] = useState<string>("");

  const resetForm = () => {
    setTitle("");
    setContent("");
    setTag("");
    setDate("");
    setSource("");
  };

  const presetForm = () => {
    //@ts-ignore
    setOriginalCard(state);
    resetForm();
    if (originalCard) {
      setTitle(originalCard?.title);
      setContent(originalCard?.content);
      setTag(originalCard?.tag);
      setDate(originalCard?.date);
      setSource(originalCard?.source);
    }
  };

  useEffect(() => {
    checkIsAllowed();
    //@ts-ignore
    console.log(state);
    presetForm();
  }, [originalCard]);

  const handleAddPost = async () => {
    try {
      writeToDatabase(databaseData, "/cards/", cards.length, {
        title: title,
        content: content,
        tag: tag,
        date: date,
        source: source
          ? source
          : "./assets/tabs/notizie-ea/generic-electronic-arts.png",
        id: cards.length,
      });
      alert("Success");
    } catch (e: any) {
      alert(e.message);
    }
  };
  const handleEditPost = async () => {
    try {
      if (originalCard)
        updateDatabase(databaseData, "/cards/", originalCard?.id, {
          title: title,
          content: content,
          tag: tag,
          date: date,
          source: source
            ? source
            : "./assets/tabs/notizie-ea/generic-electronic-arts.png",
          id: originalCard?.id,
        });
      alert("Success");
    } catch (e: any) {
      alert(e.message);
    }
  };
  const handleDeletePost = async () => {
    try {
      if (originalCard)
        deleteFromDatabase(databaseData, "/cards/", originalCard?.id);
      alert("Success");
      navigate("/");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div id="create-section">
      <div className="admin-section">
        <div className="form-section">
          <h1>Title</h1>
          <input
            placeholder="Title"
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <h1>Content</h1>
          <input
            placeholder="Content"
            type="content"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <h1>Tag</h1>
          <select
            name="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
          >
            <option value="">Select a Tag</option>
            <option value="Electronic Arts Inc.">Electronic Arts Inc.</option>
            <option value="Team 5">Team 5</option>
            <option value="EA Play">EA Play</option>
            <option value="FIFA">FIFA</option>
            <option value="F1® 22">F1® 22</option>
            <option value="Apex Legends">Apex Legends</option>
            <option value="The Sims 4">The Sims 4</option>
            <option value="Battlefield 2042">Battlefield 2042</option>
            <option value="Inside EA">Inside EA</option>
          </select>

          <h1>Date</h1>
          <input
            placeholder="Date"
            name="date"
            required
            value={date}
            onChange={(e) => [setDate(e.target.value), console.log(date)]}
          />
          <h1>Source</h1>
          <input
            placeholder="Source"
            name="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        <div id="content-section">
          <div className="card-content-container">
            <Tab
              source={source}
              tag={tag}
              title={title}
              date={date}
              content={content}
            />
          </div>
        </div>
      </div>
      <div className="button-section">
        <button onClick={resetForm}>Reset</button>
        {originalCard && (
          <button onClick={presetForm}>Reload Original Card</button>
        )}
        <button onClick={originalCard ? handleEditPost : handleAddPost}>
          {originalCard ? "Edit Post" : "Add Post"}
        </button>
        {originalCard && (
          <button onClick={handleDeletePost}>Delete Post</button>
        )}
      </div>
    </div>
  );
}
