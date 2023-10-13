import { Button } from "./utils/Button";
import Tab from "./utils/Tab";
import useDatabaseFirebase from "./hooks/useDatabaseFirebase";

export default function AllCardNews() {
  const { cards } = useDatabaseFirebase();

  return (
    <>
      <div id="content-section">
        <h3 className="title-content">Ultime novità</h3>
        <br></br>
        <div className="card-content-container">
          {cards.map((card) => {
            return (
              <Tab
                id={card.id}
                source={card.source}
                tag={card.tag}
                title={card.title}
                date={card.date}
                content={card.content}
              />
            );
          })}
        </div>
        <Button buttonSize="btn--medium" buttonStyle="btn--outline-black">
          Ultime Novità
        </Button>
      </div>
    </>
  );
}
