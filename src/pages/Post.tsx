import React, { useState } from "react";
import useDatabaseFirebase from "../components/hooks/useDatabaseFirebase";
import { databaseData } from "../firebase";
import useAuthFirebase from "../components/hooks/useAuthFirebase";

export default function Post() {
  const { writeToDatabase, cards } = useDatabaseFirebase();
  const { currentUser } = useAuthFirebase();
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

  return (
    <div
      style={{
        margin: "2rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "60vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "0 2rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {currentUser && currentUser?.email === "ludovicocolucci@gmail.com" ? (
            <>
              <h1>Title</h1>
              <input
                placeholder="Title"
                type="text"
                name="email"
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
                required
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />

              <div
                style={{
                  width: "23rem",
                  display: "flex",
                  margin: "2rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    margin: "1rem",
                    padding: "7px",
                    fontSize: "2rem",
                    backgroundColor: "red",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                  onClick={resetForm}
                >
                  Reset
                </button>
                <button
                  style={{
                    margin: "1rem",
                    padding: "7px",
                    fontSize: "2rem",
                    backgroundColor: "lightgreen",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                  onSubmit={handleAddPost}
                  onClick={handleAddPost}
                >
                  Add Post
                </button>
              </div>
            </>
          ) : (
            <h1>You are not allowed to visit this page!!!</h1>
          )}
        </div>
      </div>
    </div>
  );
}
