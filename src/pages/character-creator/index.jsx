import React, { useEffect, useState } from "react";
import { useStore, login } from "@components/netlifyAuth";
import { Lineages } from "src/fixtures/Lineages";
import { Classes } from "src/fixtures/Classes";
import { createCharacter } from "src/actions/Character";

export default function CharacterCreator() {
  const [selectedLineage, setSelectedLineage] = useState("")
  const [startingClass, setStartingClass] = useState("")
  const [chosenSubclass, setChosenSubclass] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if(form.name.value && form.lineage.value && form.startingClass.value && form.subclass.value && form.score20.value && form.score12.value && form.score10.value && form.score8.value && form.score6.value && form.score4.value) {
      const characterData = {
        name: form.name.value,
        lineage: form.lineage.value,
        levels: [form.startingClass.value],
        subclass: [form.subclass.value],
        abilityScores: {
          20: form.score20.value,
          12: form.score12.value,
          10: form.score10.value,
          8: form.score8.value,
          6: form.score6.value,
          4: form.score4.value
        }
      }
      createCharacter(characterData);
    }
  }

  // LINEAGE OPTION DROPDOWN
  useEffect(() => {
    let addtionalOptionSelector = document.getElementById("lineageOptionSelector");
    if (addtionalOptionSelector) {
      addtionalOptionSelector.options.length = 0;
      addtionalOptionSelector.options[0] = new Option()
      if (Lineages[selectedLineage]?.AdditionalOption) {
        Lineages[selectedLineage]?.AdditionalOption.options.map(option => {
          addtionalOptionSelector.options[addtionalOptionSelector.options.length] = new Option(option);
        })
      }
    }
  })

  // SUBCLASS DROPDOWN
  useEffect(() => {
    let subclassSelector = document.getElementById("subclassSelector");
    if (subclassSelector) {
      subclassSelector.options.length = 0;
      subclassSelector.options[0] = new Option()

      if(Classes[startingClass]?.Subclasses){
        Object.keys(Classes[startingClass]?.Subclasses).map(subclass => {
          subclassSelector.options[subclassSelector.options.length] = new Option(subclass);
        })
      }
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
      <form name="character" onSubmit={e => {
        handleSubmit(e);
      }}>
        {/* Hidden Inputs */}
        <input type="hidden" name="user-token" value={useStore.getState()?.user?.id || "d55286f8-27e6-40a9-beff-5a694b8c702a"} />
        {/* Character Names */}
        <div>
          <label><h1>Character Name: <input type="text" name="name" /></h1></label>
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
              name="lineageOption" 
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
          <p hidden={startingClass === ""}>
            <strong>Description:</strong>
            <br/>
            {Classes[startingClass]?.Description}
          </p>
          <p hidden={startingClass === ""}>
            <strong>Proficient with:</strong>
            <br/>
            {Classes[startingClass]?.Proficiency} Checks
          </p>
          <p hidden={startingClass === ""}>
            <strong>{Classes[startingClass]?.Exclusive.name}:</strong>
            <br/>
            {Classes[startingClass]?.Exclusive.description}
          </p>
          {/* Subclass Selection */}
          <label hidden={startingClass === ""}><h3>Subclass:</h3>
            <select 
              id="subclassSelector" 
              name="subclass" 
              onChange={(event) => setChosenSubclass(event.target.value)}
            >
            </select>
          </label>
          <p hidden={!!!chosenSubclass}>
            <strong>Description:</strong>
            <br/>
            {Classes[startingClass]?.Subclasses[chosenSubclass]?.description}
          </p>
        </div>
        <div>
          <label><h2>Ability Scores:</h2>
            {[20, 12, 10, 8, 6, 4].map(score => {
              return (
                <div key={score} className="ability-score-selector">
                  <h3>{score}:</h3>
                  <select name={`score${score}`}>
                    <option value=""></option>
                    <option value="Body">Body</option>
                    <option value="Dexterity">Dexterity</option>
                    <option value="Influence">Influence</option>
                    <option value="Mind">Mind</option>
                    <option value="Strength">Strength</option>
                    <option value="Will">Will</option>
                  </select>
                </div>
              );
            })}
          </label>
        </div>
      </form>
    </div>
  )
}