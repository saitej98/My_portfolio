import React from "react";
import { useHistory } from "react-router";
import style from "./detail.module.css";


function Details() {
  const history = useHistory();

  return (
    <div className={style.detailsbody}>
      <div className={style.contentbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Saiteja Golivi</h1>
          <p className={style.fullstack}>
            Full-stack Web Developer
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1jntQZflNCMS5e5xYzTxN-s14GAyOzr01/view?usp=sharing"
          >
            {" "}
            <button className={style.resume}>RESUME</button>
          </a>
          <div style={{ marginTop: "20px" }}>
            <a target="_blank" href="https://github.com/saitej98">
              <img
                className={style.github}
                src="/github.svg"
                alt="github"
              ></img>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/saiteja-golivi-5a0a6516a">
              <img
                className={style.linkedin}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>

            <a target="_blank" href="https://twitter.com/GoliviSaiteja">
              <img className={style.twitter} src="/twitter.gif" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
