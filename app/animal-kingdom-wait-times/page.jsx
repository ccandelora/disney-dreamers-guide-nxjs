// Purpose: Displays the Magic Kingdom wait times page
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

async function getData() {
  const domain = process.env.API_DOMAIN;
  const res = await fetch('https://queue-times.com/en-US/parks/8/queue_times.json', { cache: 'no-cache' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AnimalKingdomWaitTimes() {
  const lands = await getData();

  return (
    <>
      <div className="bg-page-pattern">
      <Navbar />
      </div>
      <Hero photo="/stephanie-klepacki-M1Pjq6RPDFU-unsplash.jpg" alt="Animal Kingdom Wait Times" title="Animal Kingdom Wait Times"/>
      <ParkCard lands={lands} />
      <Footer />
    </>
  );
}
