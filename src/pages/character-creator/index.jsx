import React, { useEffect } from "react";
import { useStore, login } from "@components/netlifyAuth";
import { useRouter } from "next/router";

export default function CharacterCreator() {
  const router = useRouter()

  useEffect(() => {
    if (!!!useStore.getState()?.user) {
      login()
      router.push('/')
    }
  })

  return (
    <div className="home-container">
      <h1>GORP</h1>
      <form name="character" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value={useStore.getState()?.user?.id} />
        <label>Character Name: <input type="text" name="name" /></label>
      </form>
    </div>
  )
}
