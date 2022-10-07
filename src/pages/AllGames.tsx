import React from "react";
import AllCards from "../components/AllCards";
import AllTabs from "../components/AllTabs";
import Hero from "../components/Hero";

export default function AllGames() {
  return (
    <div>
      <Hero />
      <AllCards />
      <AllTabs />
    </div>
  );
}
