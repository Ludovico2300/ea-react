import { useState } from "react";
import { Button } from "./utils/Button";
import Tab from "./utils/Tab";
import { useNavigate } from "react-router-dom";
import useDatabaseFirebase from "./hooks/useDatabaseFirebase";

export default function AllTabs() {
  const [activeTag, setActiveTag] = useState<string>("Electronic Arts Inc.");
  const [activeTab, setActiveTab] = useState<string>("Electronic Arts Inc.");
  const navigate = useNavigate();
  const { cards } = useDatabaseFirebase();

  function handleTag(tag: string, tab: string) {
    setActiveTag(tag);
    setActiveTab(tab);
  }

  return (
    <>
      <div id="content-section">
        <h3 className="title-content" onClick={() => navigate("/allnews")}>
          Ultime novità
        </h3>
        <div className="tab-bar-content">
          <div className="first-section">
            <button
              className={`tablinks ${
                activeTab === "Electronic Arts Inc." ? "active" : ""
              }`}
              onClick={() =>
                handleTag("Electronic Arts Inc.", "Electronic Arts Inc.")
              }
            >
              Notizie EA
            </button>
            <button
              className={`tablinks ${activeTab === "Team 5" ? "active" : ""}`}
              onClick={() => handleTag("Team 5", "Team 5")}
            >
              Team 5
            </button>
            <button
              className={`tablinks ${activeTab === "EA Play" ? "active" : ""}`}
              onClick={() => handleTag("EA Play", "EA Play")}
            >
              EA Play
            </button>
            <button
              className={`tablinks ${activeTab === "FIFA" ? "active" : ""}`}
              onClick={() => handleTag("FIFA", "FIFA")}
            >
              FIFA
            </button>
            <button
              className={`tablinks ${activeTab === "F1® 22" ? "active" : ""}`}
              onClick={() => handleTag("F1® 22", "F1® 22")}
            >
              F1
            </button>
          </div>
          <div className="second-section">
            <button
              className={`tablinks ${
                activeTab === "Apex Legends" ? "active" : ""
              }`}
              onClick={() => handleTag("Apex Legends", "Apex Legends")}
            >
              Apex Legends
            </button>
            <button
              className={`tablinks ${
                activeTab === "The Sims 4" ? "active" : ""
              }`}
              onClick={() => handleTag("The Sims 4", "The Sims 4")}
            >
              The Sims 4
            </button>
            <button
              className={`tablinks ${
                activeTab === "Battlefield 2042" ? "active" : ""
              }`}
              onClick={() => handleTag("Battlefield 2042", "Battlefield 2042")}
            >
              Battlefield
            </button>
            <button
              className={`tablinks ${
                activeTab === "Inside EA" ? "active" : ""
              }`}
              onClick={() => handleTag("Inside EA", "Inside EA")}
            >
              Inside EA
            </button>
          </div>
        </div>
        <br />
        <div className="card-content-container">
          {cards
            .filter((card) => card.tag === activeTag)
            .map((card) => {
              return (
                <Tab
                  key={card.id}
                  source={card.source}
                  tag={card.tag}
                  title={card.title}
                  date={card.date}
                  content={card.content}
                />
              );
            })}
        </div>
        <Button
          onClick={"/allnews"}
          buttonSize="btn--medium"
          buttonStyle="btn--outline-black"
        >
          {activeTab === "The Sims 4" ? "Espandi" : "Più dettagli"}
        </Button>
      </div>
    </>
  );
}
