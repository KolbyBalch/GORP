import React from "react";
import { authUser } from "@components/netlifyAuth";

export default function CharacterCreator() {
  return (
    <div className="home-container">
      <h1>GORP</h1>
      <form name="character" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="character" />
        <input type="hidden" name="user-token" value={useStore.getState().user.id} />
        <label>Character Name: <input type="text" name="name" /></label>
      </form>
    </div>
  )
}
