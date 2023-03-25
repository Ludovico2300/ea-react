import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_ARTICLE, GET_ARTICLES } from "../queries/articleQueries";
import { DELETE_ARTICLE, UPDATE_ARTICLE } from "../mutations/articleMutations";
import { Card } from "../types/Card";
import { AiFillDelete } from "react-icons/ai";

export default function EditProjectForm({ article }: { article: Card }) {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [date, setDate] = useState(article.date);
  const [source, setSource] = useState(article.source);
  const [tag, setTag] = useState(article.tag);

  //TO FIX
  // const [tag, setTag] = useState(() => {
  //   switch (article.tag) {
  //     case "Notizie EA":
  //       return "eanews";
  //     case "FIFA":
  //       return "fifa";
  //     case "EA Play":
  //       return "eaplay";
  //     case "F1":
  //       return "f1";
  //     case "The Sims 4":
  //       return "thesims4";
  //     case "Apex Legends":
  //       return "apexlegends";
  //     case "Battlefiled":
  //       return "battlefiled";
  //     case "Inside":
  //       return "insideea";
  //     default:
  //       throw new Error(`Unknown status: ${article.tag}`);
  //   }
  // });

  //UPDATE
  const [updateArticle] = useMutation(UPDATE_ARTICLE, {
    variables: { id: article.id, title, content, date, source, tag },
    refetchQueries: [{ query: GET_ARTICLE, variables: { id: article.id } }],
  });

  //@ts-ignore
  const onEdit = (e) => {
    e.preventDefault();

    if (!title || !content || !tag || !date || !source) {
      return alert("Please fill out all fields");
    }
    //@ts-ignore
    updateArticle(title, content, date, source, tag);
  };

  //DELETE
  const [deleteArticle] = useMutation(DELETE_ARTICLE, {
    // remove the variables option
    // variables: { id: article.id },
    // pass the id as a variable when the mutation is called
    variables: { id: null as string | null },
    //to update results after mutation
    update(cache, { data: { deleteArticle } }) {
      //@ts-ignore
      const { articles } = cache.readQuery({ query: GET_ARTICLES });
      cache.writeQuery({
        query: GET_ARTICLES,
        data: {
          articles: articles.filter(
            (article: Card) => article.id !== deleteArticle.id
          ),
        },
      });
    },
  });

  //@ts-ignore
  const onDelete = (e) => {
    e.preventDefault();

    deleteArticle({ variables: { id: article.id } });
    alert("Article deleted");
    window.location.href = "/";
  };

  return (
    <div className="edit-article-form-main-container">
      <h3>Update Article Details</h3>
      <form onSubmit={onEdit} className="edit-article-form">
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <label>Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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

      <button className="btn-delete-article" onClick={onDelete}>
        <AiFillDelete className="delete-icon" size={30} />
      </button>
    </div>
  );
}
