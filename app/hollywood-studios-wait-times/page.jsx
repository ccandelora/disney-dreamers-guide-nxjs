"use clinet";
// Purpose: Displays the Magic Kingdom wait times page
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

async function getData() {
  const domain = process.env.API_DOMAIN;
  const api = "https://queue-times.com/en-US/parks/7/queue_times.json";
  const res = await fetch(api, {cache: 'no-cache' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HollywoodStudiosWaitTimes() {
  const lands = await getData();

  return (
    <>
      <div className="bg-page-pattern">
      <Navbar />
      </div>
      <Hero photo="/carol-kennedy-X5WdN60n6yk-unsplash.jpg" alt="Hollywood Studios Wait Times" title="Hollywood Studios Wait Times"/>
      <ParkCard lands={lands} />
      <Footer />
    </>
  );
}
