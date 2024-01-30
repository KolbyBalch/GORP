import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <h1>GORP</h1>
      <Link href="/character-creator">Go to the Character Creator</Link>
    </div>
  )
}