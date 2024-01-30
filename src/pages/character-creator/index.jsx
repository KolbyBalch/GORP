import React, { useState } from "react";
import { useStore, login } from "@components/netlifyAuth";
import { Lineages } from "src/fixtures/Lineages";

export default function CharacterCreator() {
  const [selectedLineage, setSelectedLineage] = useState("")
  const [startingClass, setStartingClass] = useState("")

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
    <div className="character-creator-container">
      <h1>GORP</h1>
      <form name="character" method="POST" data-netlify="true">
        <div>
          <input type="hidden" name="form-name" value="character" />
          <input type="hidden" name="user-token" value={useStore.getState()?.user?.id} />
        </div>
        <div>
          <label><h2>Character Name: <input type="text" name="name" /></h2></label>
        </div>
        <div>
          <label><h2>Lineage:{' '}</h2>
            <select name="lineage" onChange={(event) => setSelectedLineage(event.target.value)}>
              <option value=""></option>
              <option value="BeastBorn">Beast-born</option>
              <option value="Cellier">Cellier</option>
              <option value="Elemental">Elemental</option>
              <option value="Elf">Elf</option>
              <option value="Human">Human</option>
              <option value="Orc">Orc</option>
              <option value="Stout">Stout</option>
            </select>
          </label>
          <p><strong>Description:</strong><br/>{Lineages[selectedLineage]?.Description}</p>
          <p><strong>Ability:</strong><br/>{Lineages[selectedLineage]?.Ability}</p>
        </div>
        <div>
          <label><h2>Starting Class:</h2>
            <select name="startingClass" onChange={(event) => setStartingClass(event.target.value)}>
              <option value=""></option>
              <option value="Barbarian">Barbarian</option>
              <option value="Druid">Druid</option>
              <option value="Mage">Mage</option>
              <option value="Monk">Monk</option>
              <option value="Paladin">Paladin</option>
              <option value="Ranger">Ranger</option>
              <option value="Rouge">Rouge</option>
              <option value="Sage">Sage</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Tinkerer">Tinkerer</option>
              <option value="Warlock">Warlock</option>
              <option value="Warrior">Warrior</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  )
}
