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
                source="https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg"
                logo="./assets/cards/fifa-logo.svg"
                game="fifa"
              />
              <Card
                source="./assets/cards/apex.jpg"
                logo="./assets/cards/apex-logo.svg"
                game="fifa"
              />
              <Card
                source="./assets/cards/fifa.jpg"
                logo="./assets/cards/fifa-logo.svg"
                game="fifa"
              />

            </div>
            <div className="second-line">
            <Card
                source="https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg"
                logo="./assets/cards/fifa-logo.svg"
                game="fifa"
              />
              <Card
                source="./assets/cards/apex.jpg"
                logo="./assets/cards/apex-logo.svg"
                game="fifa"
              />
              <Card
                source="./assets/cards/fifa.jpg"
                logo="./assets/cards/fifa-logo.svg"
                game="fifa"
              />
            </div>
          </div>
          <Button buttonSize="btn--medium" buttonStyle="btn--outline-black">
            Ultimi giochi
          </Button>
        </div>
      </div>
    </>
  );
}

/**
 * * FARE UN DRIVE CON LE IMMAGINI
 */