"use clinet";
// Purpose: Displays the Magic Kingdom wait times page
import React from "react";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

async function getData() {
  const domain = process.env.API_DOMAIN;
  const api = "https://queue-times.com/en-US/parks/5/queue_times.json";
  const res = await fetch(api, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function EpcotWaitTimes() {
  const lands = await getData();
  console.log(lands);

  return (
    <>
      <Hero
        photo="/frances-gunn-c9z9RlCh0Zo-unsplash.jpg"
        alt="Epcot"
        title="Epcot Wait Times"
      />
      <div className="bg-white ">
        <ParkCard lands={lands} />
      </div>
    </>
  );
}
