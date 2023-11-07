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
        <div>
          <h2 className="section-heading">The time</h2>
          <p>Sunday morning services begin at 10am CST.</p>
          <p>Wednesday evening classes for adults and children begin at 6:30pm CST.</p>
          <p>Monthly prayer service is the last Sunday of the month at 6pm CST.</p>
        </div>

        <div className="middle-column">
          <h2 className="section-heading">The place</h2>
          <p>Our main sanctuary is located at{' '}
            <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/7eBffeZjS7NgQp3Q9">
              7539 US-11, Carriere, MS 39426
            </a>.
          </p>
          <p>Sunday morning services are also streamed live on our <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jfellowshipchurch">Facebook page</a>.</p>
        </div>

        <div>
          <section className="team-bio">
            <div>
              <h2 className="section-heading">The team</h2>
              <p>Pastor Jonathan Fail has been with Jouney for some time now, but officially took up the role of Pastor in the summer of 2023.</p>
            </div>
            <img src="/j-fail-circle.png" alt="Pastor Jonathan Fail" width="80%" height="80%"/>
          </section>
        </div>
      </div>

      <h2 className="section-heading">Online giving</h2>
      <p>We are working hard to setup online giving through our website. In the meantime, use the following link to donate to Journey online.</p>
      <a className="big-link" href="https://app.easytithe.com/App/Form/74da2380-6834-4920-b043-d00741127b62"><strong>Easy Tithe</strong></a>


      <h2 className="section-heading">Upcoming Events</h2>
    </main>
  )
}
