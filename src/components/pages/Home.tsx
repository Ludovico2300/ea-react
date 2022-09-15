import React from "react";
import AllCards from "../AllCards";
import AllTabs from "../AllTabs";
import Hero from "../Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AllCards />
      <AllTabs />
    </div>
  );
}
