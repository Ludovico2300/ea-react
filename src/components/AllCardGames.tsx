import { Button } from "./utils/Button";
import Card from "./utils/Card";

export default function AllCardGames() {

  return (
    <>
      <div id="card-section">
        <div className="cards">
          <h1 className="title">Ultimi giochi</h1>
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
                game="apex"
              />
              <Card
                source="./assets/cards/battlefield.jpg"
                logo="./assets/cards/battlefield-logo.svg"
                game="battle"
              />
            </div>
            <div className="second-line">
              <Card
                source="./assets/cards/the-sims.jpg"
                logo="./assets/cards/the-sims-logo.png"
                game="sims"
              />
              <Card
                source="./assets/cards/car.jpg"
                logo="./assets/cards/car-logo.png"
                game="car"
              />
              <Card
                source="./assets/cards/it-takes-twop.jpg"
                logo="./assets/cards/it-takes-two-logo.png"
                game="two"
              />
            </div>
            <div className="first-line">
              <Card
                source="./assets/cards/madden.jpg"
                logo="./assets/cards/madden-logo.svg"
                game=""
              />
              <Card
                source="https://media.contentapi.ea.com/content/dam/gin/images/2021/07/grid-legends-gamebox.jpg.adapt.crop1x1.767p.jpg"
                logo="https://media.contentapi.ea.com/content/dam/gin/common/logos/grid-legends-logo-gamebox.png"
                game=""
              />
              <Card
                source="https://media.contentapi.ea.com/content/dam/gin/images/2021/08/nhl22-gin-16x9.jpg.adapt.crop1x1.767p.jpg"
                logo="https://media.contentapi.ea.com/content/dam/gin/common/logos/nhl22-mono-logo.png"
                game=""
              />
            </div>
            <div className="second-line">
              <Card
                source="https://media.contentapi.ea.com/content/dam/gin/images/2020/06/lir-keyart.jpg.adapt.crop1x1.767p.jpg"
                logo="https://media.contentapi.ea.com/content/dam/gin/common/logos/lir-logo-mono.png"
                game=""
              />
              <Card
                source="https://media.contentapi.ea.com/content/dam/gin/images/2020/07/ufc4-gin-keyart.png.adapt.crop1x1.767p.png"
                logo="https://media.contentapi.ea.com/content/dam/gin/common/logos/ufc-mono-logo.svg"
                game=""
              />
              <Card
                source="https://media.contentapi.ea.com/content/dam/gin/images/2020/06/rocket-arena-keyart-16x9.jpg.adapt.crop1x1.767p.jpg"
                logo="https://media.contentapi.ea.com/content/dam/gin/common/logos/rocket-arena-mono-logo.svg"
                game=""
              />
            </div>
          </div>
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--outline-black"
          >
            Ultimi giochi
          </Button>
        </div>
      </div>
    </>
  );
}

