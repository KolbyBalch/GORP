import NavBar from "@components/NavBar";
import React, { useEffect } from "react";
import styles from "../styles/NavBar.module.css"

export default function Home() {

  useEffect(() => {
    const header = document.getElementById("navBar");
    const infoBlock = document.getElementById("basicInfo");
    const stickyOffset = header.offsetTop;

    window.onscroll = function() {
      if(window.scrollY > stickyOffset) {
        header.classList.add(styles.sticky);
        infoBlock.classList.add("header-padding");
      } else {
        header.classList.remove(styles.sticky);
        infoBlock.classList.remove("header-padding");
      }
    }
  }, [])
  
  return (
    <main>
      <div className="landing-container">
        <h1 className="landing-container">
          <span className="hollow-title">START</span>
          <br />
          <span className="hollow-title">YOUR</span>
          <br />
          <span className="full-title">JOURNEY</span>
        </h1>
      </div>
      <NavBar />
      <div className="home-container" id="basicInfo">
        <h2 className="section-heading">The time</h2>
        <p>Our Sunday morning services begin at 10am CST.</p>
        <p>New Wednesday evening classes for adults and children begin at 6pm CST.</p>
        <p>Monthly prayer service is now the last Sunday of the month at 6pm CST.</p>

        <h2 className="section-heading">The place</h2>
        <p>Our main sanctuary is located at{' '}
          <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/7eBffeZjS7NgQp3Q9">
            7539 US-11, Carriere, MS 39426
          </a>.
        </p>
        <p>All Sunday morning services are also streamed live on our <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jfellowshipchurch">Facebook page</a>.</p>

        <h2 className="section-heading">The team</h2>
        <h3>Pastor</h3>
        <p>Pastor Jonathan Fail has been with Jouney for some time now, but officially took up the role of Pastor in the summer of 2023.</p>
        <h3>Minister of Music</h3>
        <p>Bro. Matt leads our weekly worship with a guitar in hand and a passion and love for Jesus in his heart.</p>
        <h3>Minister of Children</h3>
        <p>Though not officially the Minister of Children, our very own Claire Fail has taken up the torch of taking care of and leading our young children.</p>
      </div>
    </main>
  )
}
