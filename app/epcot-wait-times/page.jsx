"use clinet";
// Purpose: Displays the Magic Kingdom wait times page
import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

async function getData() {
  const api = "http://localhost:3000/api/epcot-wait-times";
  const res = await fetch(api, { cache: "no-cache" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function EpcotWaitTimes() {
  const lands = await getData();

  return (
    <>
      <div className="bg-page-pattern">
      <Navbar />
      </div>
      <Hero photo="/frances-gunn-c9z9RlCh0Zo-unsplash.jpg" alt="Epcot" title="Epcot Wait Times"/>
      <ParkCard {...lands} />
      <Footer />
    </>
  );
}
