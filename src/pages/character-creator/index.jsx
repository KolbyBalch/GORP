import React from "react";

export default function CharacterCreator() {
  return (
    <div className="home-container">
      <h1>GORP</h1>
      <form name="character" method="POST" data-netlify="true">
        <label>Character Name: <input type="text" name="name" /></label>
      </form>
    </div>
  )
}
