import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ARTICLE } from "../mutations/articleMutations";
import { GET_ARTICLES } from "../queries/articleQueries";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState(
    "./assets/tabs/inside-ea/generic-electronic-arts.png"
  );

  const [addArticle] = useMutation(ADD_ARTICLE, {
    variables: { title, content, tag, date, source },
    // to update results after mutation
    // update(cache, { data: { addArticle } }) {
    //   const { articles } = cache.readQuery({ query: GET_ARTICLES });
    //   cache.writeQuery({
    //     query: GET_ARTICLES,
    //     data: { articles: [...articles, addArticle] },
    //   });
    // },
  });

  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !date || !tag) {
      return alert("Please fill in all required fields");
    }

    //@ts-ignore
    addArticle(title, content, tag, date, source);

    setTitle("");
    setContent("");
    setTag("");
    setDate("");
    setSource("");
    alert("Article added successfully");
    window.location.href = "/";
  };

  return (
    <>
      <div
        style={{
          padding: "150px",
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "50vh",
            width: "100%",
          }}
        >
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content</label>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <select id="tag" value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="">Select a tag</option>
            {/* <option value="eanews">Notizie EA</option> this option required a review (Notizie EA --> Electronic Arts Inc. ) */}
            <option value="fifa">FIFA</option>
            <option value="eaplay">EA Play</option>
            <option value="f1">F1</option>
            <option value="thesims4">The Sims 4</option>
            <option value="apexlegends">Apex Legends</option>
            <option value="battlefiled">Battlefiled</option>
            <option value="insideea">Inside EA</option>
          </select>
          <div className="mb-3">
            <label>Date</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>Source</label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
