import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../assests/searchicon.svg";

export default function Search({ placeholder }) {
  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
      <form className={styles.wrapper} onSubmit={onsubmit}>
        <input className={styles.search} placeholder={placeholder} required />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
  );
}
