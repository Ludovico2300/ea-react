import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_ARTICLE } from "../../mutations/articleMutations";
import { GET_ARTICLES } from "../../queries/articleQueries";
import { Card } from "../../types/Card";
import { AiFillDelete } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";

export default function Tab({ article }: { article: Card }) {
  const navigate = useNavigate();

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

  return (
    <div className="card-content">
      <div className="card-main-content">
        <img className={`img-content`} src={article.source} alt="" />

        <div className="info-card-content-container">
          <div className="mark-date-content">
            <h3 className="mark">{article.tag}</h3>
            <div>{article.date}</div>
          </div>

          <div className="title-card-content">
            <h3>{article.title}</h3>
          </div>
          <div className="text-card-content">
            <h4>{article.content}</h4>
          </div>
        </div>
      </div>
      <div className="btn-card-content">
        <Link to={`/view/${article.id}`} className="btn-view-article">
          <MdVisibility className="view-icon" size={30} />
        </Link>
      </div>
    </div>
  );
}
