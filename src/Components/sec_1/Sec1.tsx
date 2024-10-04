"use client";

import CanvasAnimation from "@/Components/Animation/CanvasAnimation";
import CircleAnimation from "@/Components/Animation/CircleAnimation";
import downImage from "@/Components/sec_1/images/check.png";
import icon from "@/Components/sec_1/images/icon-120_user-new.svg";
import downArr from "@/Components/sec_1/images/right-arrow.png";
import upArr from "@/Components/sec_1/images/upload.png";
import style from "@/Components/sec_1/Sec1.module.css";
import Image from "next/image";
import { useEffect } from "react";

function Sec1() {
  useEffect(() => {
    document.documentElement.classList.add("-loaded", "-ready");
  }, []);

  return (
    <>
      <div className={style.ai_act_wrap}>
        <div className={style.ai_bg}>
          <span data-v-8302dbff=""></span>
          <span data-v-8302dbff=""></span>
          <span data-v-8302dbff=""></span>
        </div>
        <section className={style.c_welcome} data-v-8302dbff>
          <div className={style.w} data-v-8302dbff>
            <div className={style.w_in}>
              <h1
                className={style.head_1}
                style={{ "--l-delay": "0" } as React.CSSProperties}
                data-v-8302dbff=""
              >
                <span data-v-8302dbff="">Your Own AI Call Center</span>
              </h1>
              <p
                data-v-8302dbff=""
                className={style.para_1}
                style={{ "--l-delay": "0.15" } as React.CSSProperties}
              >
                OpenCall AI empowers your business, driving revenue, cutting
                overhead, and streamlining all phone activities for seamless
                operations.
              </p>
              <p
                data-v-8302dbff
                className={style.para_2}
                style={{ "--l-delay": "0.3" } as React.CSSProperties}
              >
                <span data-v-8302dbff>
                  <Image
                    className={style.downImage}
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Answer Questions
                </span>
                <span data-v-8302dbff>
                  <Image
                    className={style.downImage}
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Triage Callers
                </span>
                <span data-v-8302dbff>
                  <Image
                    className={style.downImage}
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Book Appointments
                </span>
                <span data-v-8302dbff>
                  <Image
                    className={style.downImage}
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Search Information
                </span>
                <span data-v-8302dbff>
                  <Image
                    className={style.downImage}
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Custom Workflows
                </span>
              </p>
            </div>
            <footer
              className={style.footer_1}
              style={{ "--l-delay": "0.075" } as React.CSSProperties}
              data-v-8302dbff
            >
              <div className={style.form_wrap} data-v-8302dbff>
                <div className={style.form_cta} data-v-8302dbff>
                  <div className={style.from} data-v-8302dbff>
                    <header data-v-8302dbff className={style.sec1_header}>
                      <figure className={style.sec1_figure}>
                        <Image
                          src={icon}
                          alt="icon-img"
                          height={54}
                          width={54}
                        />
                      </figure>
                      <span className={style.sec1_h5} data-v-8302dbff>
                        Get Started
                      </span>
                    </header>
                    <a
                      href="https://app.open-call.ai/api/auth/signup"
                      target="_blank"
                      className={`${style.button} ${style.p} ${style.b}`}
                      data-v-e3fde6b2
                    >
                      <span className={style.text} data-v-e3fde6b2>
                        <span data-label="Try OpenCall.ai" data-v-e3fde6b2>
                          <span data-v-e3fde6b2>Try OpenCall.ai</span>
                        </span>
                        <span className={style.mm} data-v-e3fde6b2>
                          Risk Free
                        </span>
                      </span>
                      <svg
                        data-v-3089695e
                        data-v-e3fde6b2-s
                        className={style.svg_icon}
                      >
                        <use
                          href="#Capa_1"
                          data-v-3089695e
                          data-v-e3fde6b2-s
                        ></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.scroll} data-v-8302dbff>
                <Image
                  className={style.downArr}
                  src={downArr}
                  alt="downArr"
                  height={36}
                  width={36}
                />
                <span className={style.m} data-v-8302dbff>
                  Scroll down
                </span>
              </div>
            </footer>
          </div>
        </section>
        <div className={style.ai_action} data-v-8302dbff>
          <div className={style.stick}>
            <div className={style.wrap} data-v-c7750596>
              <div
                id="siric"
                className={style.voice_line}
                data-v-c7750596
                data-v-ebeacc6c
              ></div>
              <button data-v-c7750596 className={style.animation_button}>
                <div className={style.animation_class} data-v-c7750596>
                  <CircleAnimation />
                </div>
                <div className={style.ai} id="ai" data-v-c7750596>
                  <span className={style.client} data-v-c7750596></span>
                  <CanvasAnimation />
                </div>
              </button>
              <span className={style.pointer} data-v-c7750596>
                <Image
                  className={style.upArr}
                  style={{ "--l-delay": "0.3" } as React.CSSProperties}
                  src={upArr}
                  alt="upArr"
                  height={18}
                  width={18}
                />
                <span
                  className={`${style.a_to_top} ${style.m}`}
                  style={{ "--l-delay": "0.45" } as React.CSSProperties}
                  data-v-c7750596
                >
                  See It in Action
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec1;
