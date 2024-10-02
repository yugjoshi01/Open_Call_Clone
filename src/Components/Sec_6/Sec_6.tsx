"use client";

import Lottie from "lottie-react";
import mobileAnimation from "../../../public/mobile2.json";
import style6 from "./Sec_6.module.css";

function Sec_6() {
  return (
    <section className={style6.c_learn} data-v-a95f498f>
      <div className={style6.w} data-v-a95f498f>
        <div className={style6.post} data-v-a95f498f>
          <div className={style6.bg} data-v-a95f498f>
            <div data-v-a95f498f>
              <span data-v-a95f498f></span>
              <span data-v-a95f498f></span>
              <span data-v-a95f498f></span>
            </div>
          </div>
          <div className={style6.tt} data-v-a95f498f>
            <span className={style6.mid} data-v-a95f498f>
              "Great, I've scheduled an appointment for 4pm this Thursday."
            </span>
            <span className={style6.para} data-v-a95f498f>
              — your AI receptionist
            </span>
          </div>
        </div>
        <div className={style6.phone} data-v-a95f498f>
          <Lottie animationData={mobileAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
}

export default Sec_6;
