import { Button } from "./utils/Button";
import Tab from "./utils/Tab";
import { cards } from "./data";

export default function AllCardNews() {

  return (
    <>
      <div id="content-section">
        <h3 className="title-content">Ultime novità</h3>
        <br></br>
        <div className="card-content-container">
          {cards
            .map((card) => (
                <Tab
                  key={card.id}
                  source={card.source}
                  tag={card.tag}
                  title={card.title}
                  date={card.date}
                  content={card.content}
                />
              )
            )}
        </div>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--outline-black"
          
        >
          Ultime Novità
        </Button>
      </div>
    </>
  );
}

