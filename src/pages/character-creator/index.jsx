import React, { useState } from "react";
import { useStore, login } from "@components/netlifyAuth";
import { Lineages } from "src/fixtures/Lineages";

export default function CharacterCreator() {
  const [selectedLineage, setSelectedLineage] = useState("")

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
        <label>Lineage: 
          <input type="select" name="lineage" onChange={(event) => setSelectedLineage(event.target.value)}>
            <option value={Lineages.BeastBorn}>Beast-born</option>
            <option value={Lineages.Cellier}>Cellier</option>
            <option value={Lineages.Elemental}>Elemental</option>
            <option value={Lineages.Elf}>Elf</option>
            <option value={Lineages.Human}>Human</option>
            <option value={Lineages.Orc}>Orc</option>
            <option value={Lineages.Stout}>Stout</option>
          </input>
        </label>
        <p>Description:<br/>{selectedLineage}</p>
      </form>
    </div>
  )
}
