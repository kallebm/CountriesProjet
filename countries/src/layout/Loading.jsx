import React from "react";
import loading from "../assets/loading.svg";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
