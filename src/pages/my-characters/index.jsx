import React, { useDeferredValue, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@components/netlifyAuth";
import { getCharacters } from "src/actions/Character";

export default function myCharacters() {
    const [ characterArray, setCharacterArray ] = useState([]);
    getCharacters(useStore.getState()?.user?.id).then(response => {setCharacterArray(response)});

    useEffect(() => {
        console.log(characterArray);
    }, [characterArray])

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
        <h1>Characters</h1>
        </div>
    )
}