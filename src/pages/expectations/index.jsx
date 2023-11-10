import NavBar from "@components/NavBar";
import React, { useEffect } from "react";
import styles from "@styles/NavBar.module.css"

export default function Expectations() {

    useEffect(() => {
        const header = document.getElementById("navBar");
        header.classList.add(styles.sticky);
        
      }, [])
      
  return (
    <main>
      <NavBar alwaysSticky />
      <div className="expectations-div">
        <h1 className="section-heading">What to expect</h1>
        <p className="lead-text">If you are planning to visit Journey Church, we encourage you to reach out to us. We have visitor cards available online and in person that help us get to know you and how we can serve with you.</p>
        
        <h2 className="section-heading">Worship</h2>
        <p>At Journey Church, we worship with a blend of mostly contemporary
          music with some hymns. 
          <br />
          We are actively seeking out a new music
          minister at this time, so this is subject to change depending on
          who is leading worship.
        </p>

        <h2 className="section-heading">Teaching</h2>
        <p>
          Pastor Jonathan Fail teaches from the English Standard Version, and
          bibles of the same translation can be found in the back of our seats.
        </p>
        <p>
          Our Wednesday night classes feature a devotional led by Pastor 
          Jonathan Fail.
        </p>

        <h2 className="section-heading">Children and Youth</h2>
        <div className="youth-container">
          <div>
            <p className="lead-text"><strong>Nursery</strong></p>
            <p>
              Children younger than preschool age may attend the Nursery class, 
              but an adult will need to fill out a form listing allergies and 
              other information about the child.
            </p>
          </div>

          <div className="middle-column">
          <p className="lead-text"><strong>Children's Church</strong></p>
            <p>
              Children in pre-school through sixth grade may attend Children's 
              Church after attending worship with the adults.
            </p>
          </div>

          <div>
          <p className="lead-text"><strong>Youth</strong></p>
            <p>
              While youth (6th through 12th grade) do not have a seperate Sunday morning class, 
              youth specific Wednesday night classes are beginning soon.
            </p>
          </div>
          
          
        </div>
      </div>
    </main>
  )
}
