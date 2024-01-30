import React, { useEffect } from "react";
import { useStore, login } from "@components/netlifyAuth";

export default function CharacterCreator() {

  if (!!!useStore.getState()?.user?.id) {
    return (
      <div className="home-container">
        <h1>Sorry!</h1>
        <p>You must be logged in to see and create characters.</p>
        <button onClick={login} >Click here to login</button>
        <p>If you are logged in, please try again. If this issue persists, please let us know.</p>
      </div>
    )
  }
  return (
    <div className="home-container">
      <h1>GORP</h1>
      <form name="character" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="character" />
        <input type="hidden" name="user-token" value={useStore.getState()?.user?.id} />
        <label>Character Name: <input type="text" name="name" /></label>
      </form>
    </div>
  )
}
