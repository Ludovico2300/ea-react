import { Button } from "./utils/Button";
import Card from "./utils/Card";

export default function AllCards() {
  return (
    <>
      <div id="card-section">
        <div className="cards">
          <h1 className="title">Giochi in evidenza</h1>
          <div className="sub-container">
            <div className="first-line">

              <Card
                img="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
                logo="../assets/cards/fifa-logo.svg"
                game="fifa"
              />

            </div>
            <div className="second-line"></div>
          </div>
          <Button buttonSize="btn--medium" buttonStyle="btn--outline-black">
            Ultimi giochi
          </Button>
        </div>
      </div>
    </>
  );
}
