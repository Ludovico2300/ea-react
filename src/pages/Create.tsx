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
  const { currentUser } = useAuthFirebase();
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
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {currentUser && currentUser?.email === "ludovicocolucci@gmail.com" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw",
            }}
          >
            {/* FORM SECTION */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
              <input
                placeholder="Tag"
                type="tag"
                name="tag"
                required
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <h1>Date</h1>
              <input
                placeholder="Date"
                type="name"
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <h1>Source</h1>
              <input
                placeholder="Source"
                name="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>

            {/* CARD SECTION */}
            <div
              id="content-section"
              style={{ backgroundColor: "transparent" }}
            >
              <div
                className="card-content-container"
                style={{
                  width: "100%",
                }}
              >
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

          {/* BUTTON DIV SECTION */}
          <div
            style={{
              width: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button
              style={{
                margin: "1rem",
                padding: "7px",
                fontSize: "2rem",
                border: "3px solid black",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={resetForm}
            >
              Reset
            </button>

            {originalCard && (
              <button
                style={{
                  margin: "1rem",
                  padding: "7px",
                  fontSize: "2rem",
                  border: "3px solid black",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={presetForm}
              >
                Reload Original Card
              </button>
            )}

            <button
              style={{
                margin: "1rem",
                padding: "7px",
                fontSize: "2rem",
                border: "3px solid black",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onSubmit={originalCard ? handleEditPost : handleAddPost}
              onClick={originalCard ? handleEditPost : handleAddPost}
            >
              {originalCard ? "Edit Post" : "Add Post"}
            </button>
            {originalCard && (
              <button
                style={{
                  margin: "1rem",
                  padding: "7px",
                  fontSize: "2rem",
                  border: "3px solid black",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onSubmit={handleDeletePost}
                onClick={handleDeletePost}
              >
                Delete Post
              </button>
            )}
          </div>
        </div>
      ) : (
        <h1>You are not allowed to visit this page!!!</h1>
      )}
    </div>
  );
}
