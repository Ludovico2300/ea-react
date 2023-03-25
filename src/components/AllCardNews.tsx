import { Button } from "./utils/Button";
import Tab from "./utils/Tab";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "../queries/articleQueries";
import { Card } from "../types/Card";

export default function AllCardNews() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  return (
    <>
      <div id="content-section">
        <h3 className="title-content">Ultime novità</h3>
        <br></br>
        <div className="card-content-container">
          {data?.articles.map((article: Card) => {
            return <Tab article={article} key={article.id} />;
          }) ?? <h1>Loading... </h1>}
        </div>
        <Button buttonSize="btn--medium" buttonStyle="btn--outline-black">
          Ultime Novità
        </Button>
      </div>
    </>
  );
}
