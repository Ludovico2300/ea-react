import { useState, useEffect } from "react";
import { Button } from "./utils/Button";
import Tab from "./utils/Tab";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "../queries/articleQueries";
import { Card } from "../types/Card";
import { useTranslation } from "react-i18next";

export default function AllTabs() {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState<string>("Electronic Arts Inc.");
  const [activeTab, setActiveTab] = useState<string>("Electronic Arts Inc.");
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ARTICLES);

  function handleTag(tag: string, tab: string) {
    setActiveTag(tag);
    setActiveTab(tab);
  }

  return (
    <>
      <div id="content-section">
        <h3 className="title-content" onClick={() => navigate("/allnews")}>
          {t("misc.latest_news")}
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
          {data?.articles
            .filter((article: Card) => article.tag === activeTag)
            .map((article: Card) => {
              return (
                <Tab
                  key={article.id}
                  source={article.source}
                  tag={article.tag}
                  title={article.title}
                  date={article.date}
                  content={article.content}
                />
              );
            }) ?? <h1>Loading...</h1>}
        </div>
        <Button
          onClick={"/allnews"}
          buttonSize="btn--medium"
          buttonStyle="btn--outline-black"
        >
          {activeTab === "The Sims 4"
            ? t("misc.expand")
            : t("misc.more_details")}
        </Button>
      </div>
    </>
  );
}
