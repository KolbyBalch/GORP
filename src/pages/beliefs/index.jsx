import NavBar from "@components/NavBar";
import React, { useEffect } from "react";
import styles from "@styles/NavBar.module.css"

export default function Beliefs() {

    useEffect(() => {
        const header = document.getElementById("navBar");
        header.classList.add(styles.sticky);
        
      }, [])
      
  return (
    <main>
      <NavBar alwaysSticky />
      <div className="beliefs-div">
        <h1 className="section-heading">
          What we believe
        </h1>
        <p className="lead-text">As a member of the Southern Baptist Convention, Journey Church agrees with the <a href="https://bfm.sbc.net/bfm2000/">Baptist Faith & Message, 2000</a>
        <br/>
        Below is a shortened, simplified version of the document. To view the full document, click <a href="https://bfm.sbc.net/bfm2000/">here</a></p>

        <div>
          <h2>I. The Scriptures</h2>
          <p>The Holy Bible was written by men divinely inspired and is God’s revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. Therefore, all Scripture is totally true and trustworthy.</p>
          
          <h2>II. God</h2>
          <p>There is one and only one living and true God. He is an intelligent, spiritual, and personal Being, the Creator, Redeemer, Preserver, and Ruler of the universe. God is infinite in holiness and all other perfections. God is all powerful and all knowing; and His perfect knowledge extends to all things, past, present, and future, including the future decisions of His free creatures. To Him we owe the highest love, reverence, and obedience. The eternal triune God reveals Himself to us as Father, Son, and Holy Spirit, with distinct personal attributes, but without division of nature, essence, or being.</p>

          <h2>III. Man</h2>
          <p>Man is the special creation of God, made in His own image. He created them male and female as the crowning work of His creation. The gift of gender is thus part of the goodness of God’s creation. In the beginning man was innocent of sin and was endowed by his Creator with freedom of choice. By his free choice man sinned against God and brought sin into the human race. Through the temptation of Satan man transgressed the command of God, and fell from his original innocence whereby his posterity inherit a nature and an environment inclined toward sin. Therefore, as soon as they are capable of moral action, they become transgressors and are under condemnation. Only the grace of God can bring man into His holy fellowship and enable man to fulfill the creative purpose of God.</p>

          <h2>IV. Salvation</h2>
          <p>Salvation involves the redemption of the whole man, and is offered freely to all who accept Jesus Christ as Lord and Saviour, who by His own blood obtained eternal redemption for the believer. In its broadest sense salvation includes regeneration, justification, sanctification, and glorification. There is no salvation apart from personal faith in Jesus Christ as Lord.</p>

          <h2>V. God's Purpose of Grace</h2>
          <p>Election is the gracious purpose of God, according to which He regenerates, justifies, sanctifies, and glorifies sinners. It is consistent with the free agency of man, and comprehends all the means in connection with the end. It is the glorious display of God’s sovereign goodness, and is infinitely wise, holy, and unchangeable. It excludes boasting and promotes humility.</p>

          <h2>VI. The Church</h2>
          <p>A New Testament church of the Lord Jesus Christ is an autonomous local congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel; observing the two ordinances of Christ, governed by His laws, exercising the gifts, rights, and privileges invested in them by His Word, and seeking to extend the gospel to the ends of the earth. Each congregation operates under the Lordship of Christ through democratic processes. In such a congregation each member is responsible and accountable to Christ as Lord. Its two scriptural offices are that of pastor/elder/overseer and deacon. While both men and women are gifted for service in the church, the office of pastor/elder/overseer is limited to men as qualified by Scripture.</p>
        </div>

        <h2 className="section-heading">Important note</h2>
        <p>This is <strong>NOT</strong> the full document of our beliefs. A full version of the <a href="https://bfm.sbc.net/bfm2000/">Baptist Faith & Message, 2000</a> is available <a href="https://bfm.sbc.net/bfm2000/">here</a></p>
      </div>
    </main>
  )
}
