import React, { useEffect, useState } from "react";
import { useStore, login } from "@components/netlifyAuth";
import { Lineages } from "src/fixtures/Lineages";
import { Classes } from "src/fixtures/Classes";

export default function CharacterCreator() {
  const [selectedLineage, setSelectedLineage] = useState("")
  const [startingClass, setStartingClass] = useState("")
  const [chosenSubclass, setChosenSubclass] = useState("")

  // LINEAGE OPTION DROPDOWN
  useEffect(() => {
    let addtionalOptionSelector = document.getElementById("lineageOptionSelector");
    addtionalOptionSelector.options.length = 0;
    if (Lineages[selectedLineage]?.AdditionalOption) {
      Lineages[selectedLineage]?.AdditionalOption.options.map(option => {
        addtionalOptionSelector.options[addtionalOptionSelector.options.length] = new Option(option);
      })
    }
  })

  // SUBCLASS DROPDOWN
  useEffect(() => {
    let subclassSelector = document.getElementById("subclassSelector");
    subclassSelector.options.length = 0;

    if(Classes[startingClass]?.Subclasses){
      Object.keys(Classes[startingClass]?.Subclasses).map(subclass => {
        subclassSelector.options[subclassSelector.options.length] = new Option(subclass);
      })
    }
  }, [startingClass])

  // if (!!!useStore.getState()?.user?.id) {
  //   return (
  //     <div className="home-container">
  //       <h1>Sorry!</h1>
  //       <p>You must be logged in to see and create characters.</p>
  //       <button onClick={login} >Click here to login</button>
  //       <p>If you are logged in, please try again. If this issue persists, please let us know.</p>
  //     </div>
  //   )
  // }
  return (
    <div className="character-creator-container">
      <h1>GORP</h1>
      <form name="character" method="POST" data-netlify="true">
        {/* Hidden Inputs */}
        <div>
          <input type="hidden" name="form-name" value="character" />
          <input type="hidden" name="user-token" value={useStore.getState()?.user?.id} />
        </div>
        {/* Character Names */}
        <div>
          <label><h2>Character Name: <input type="text" name="name" /></h2></label>
        </div>
        {/* Lineage Selection */}
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
          <p hidden={selectedLineage === ""}><strong>Description:</strong><br/>{Lineages[selectedLineage]?.Description}</p>
          <p hidden={selectedLineage === ""}><strong>Ability:</strong><br/>{Lineages[selectedLineage]?.Ability}</p>
          <label hidden={!!!Lineages[selectedLineage]?.AdditionalOption}>
            <h3>
              {Lineages[selectedLineage]?.AdditionalOption?.prompt}
            </h3>
            <select 
              name="lineageOptionSelector" 
                id="lineageOptionSelector"
                hidden={!!!Lineages[selectedLineage]?.AdditionalOption}
              >
              </select>
          </label>
        </div>
        {/* Class Selections */}
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
              <option value="Rogue">Rogue</option>
              <option value="Sage">Sage</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Tinkerer">Tinkerer</option>
              <option value="Warlock">Warlock</option>
              <option value="Warrior">Warrior</option>
            </select>
          </label>
          <p hidden={startingClass === ""}><strong>Description:</strong><br/>{Classes[startingClass]?.Description}</p>
          <p hidden={startingClass === ""}>
            <strong>{Classes[startingClass]?.Exclusive.name}:</strong>
            <br/>
            {Classes[startingClass]?.Exclusive.description}
          </p>

          <label hidden={startingClass === ""}><h3>Subclass:</h3>
            <select 
              id="subclassSelector" 
              name="subclass" 
              onChange={(event) => setChosenSubclass(event.target.value)}
            >
            </select>
          </label>
        </div>
      </form>
    </div>
  )
}