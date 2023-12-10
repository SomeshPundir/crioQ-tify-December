import React from "react";
import styles from "./Hero.module.css";
// import Headphones from ".././assests/headphone.png"
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../assests/headphone.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}
