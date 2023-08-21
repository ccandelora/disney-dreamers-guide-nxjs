"use clinet";
// Purpose: Displays the Magic Kingdom wait times page
import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";
import photo from "../../public/magic-kingdom.jpg";

async function getData() {
  const domain = process.env.API_DOMAIN;
  const api = domain + "/api/magic-kingdom-wait-times";
  const res = await fetch(api);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function MagicKingdomWaitTimes() {
  const lands = await getData();
  const photo = "/younho-choo-f6ImWlMhn18-unsplash.jpg"
  const alt = "Magic Kingdom"
  const title = "Magic Kingdom Wait Times"

  return (
    <>
      <div className="bg-page-pattern">
      <Navbar />
      </div>
      <Hero photo={photo} alt={alt} title={title}/>
      <ParkCard {...lands} />
      <Footer />
    </>
  );
}
