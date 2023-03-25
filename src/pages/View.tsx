import { Link, useParams } from "react-router-dom";
import EditArticleForm from "../components/EditArticleForm";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE } from "../queries/articleQueries";

export default function View() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE, { variables: { id } });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div
          id="view-article-section"
          style={{
            padding: "150px",
          }}
        >
          <Link to="/">Back</Link>

          <div className="card-content">
            <div className="card-main-content">
              <img
                className={`img-content`}
                src={`.${data.article.source}`}
                alt="Image"
              />

              <div className="info-card-content-container">
                <div className="mark-date-content">
                  <h3 className="mark">{data.article.tag}</h3>
                  <div>{data.article.date}</div>
                </div>

                <div className="title-card-content">
                  <h3>{data.article.title}</h3>
                </div>
                <div className="text-card-content">
                  <h4>{data.article.content}</h4>
                </div>
                <div className="btn-card-content">{/* @ts-ignore */}</div>
              </div>
            </div>
          </div>

          <EditArticleForm article={data.article} />
        </div>
      )}
    </>
  );
}
