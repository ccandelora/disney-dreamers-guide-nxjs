'use clinet';
// Purpose: Displays the Magic Kingdom wait times page
import React from "react";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

async function getData() {
  const domain = process.env.API_DOMAIN;
  const api = "https://queue-times.com/en-US/parks/6/queue_times.json";
  const res = await fetch(api, { cache: "no-cache" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export default async function MagicKingdomWaitTimes() {
  const photo = "/younho-choo-f6ImWlMhn18-unsplash.jpg"
  const alt = "Magic Kingdom"
  const title = "Magic Kingdom Wait Times"
  const lands = await getData();

  return (
    <>
      <Hero photo={photo} alt={alt} title={title}/>
      <div className="bg-white ">
        <ParkCard lands={lands}/> 
      </div>
    </>
  );
}
