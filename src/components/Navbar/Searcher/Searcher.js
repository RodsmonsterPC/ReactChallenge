import React from "react";
import styles from '../Searcher/searcher.module.scss'
import search from '../images/search.png'
const Searcher = () => {
  return (
    <div className={`input-group align-items-center w-auto ${styles.contenedorSearch}`}>
      <input
        type="text"
        className="form-control d-none h-75 border-end-0  d-md-flex"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
      <span
        className={`${styles.inputGroupText} input-group-text d-none d-md-flex h-75  `}
        id="basic-addon1"
      >
        <img
          className=" d-none d-md-block"
          src={search}
          alt="img"
        />
      </span>
    </div>
  );
};

export default Searcher;
