"use client";

import downImage from "@/CssFile/images/check.png";
import icon from "@/CssFile/images/icon-120_user-new.svg";
import "@/CssFile/Main.css";
import Image from "next/image";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    document.documentElement.classList.add("-loaded", "-ready");
  }, []);

  return (
    <main className="page home-page">
      <div className="vault">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ display: "none" }}
        >
          <symbol id="Capa_1" viewBox="0 0 197.091 197.091">
            <path
              d="M32.131,184.928L32.131,184.928c-18.388,0-31.573-2.505-32.131-2.616l0.734-7.648
				c32.349,0,55.555-8.45,68.964-25.098c15.174-18.835,13.532-43.34,12.394-51.811H25.918l85.588-85.592l85.585,85.592h-53.976
				C136.315,173.487,70.922,184.928,32.131,184.928z M44.564,90.028h43.912l0.673,3.028c0.311,1.432,7.476,35.341-13.381,61.302
				c-8.425,10.475-20.113,18.041-34.94,22.651c42.867-1.882,90.753-18.714,94.861-83.362l0.229-3.618h42.527l-66.939-66.946
				L44.564,90.028z"
            ></path>
          </symbol>
        </svg>
      </div>
      <div className="ai-act-wrap">
        <div className="ai-bg -inview">
          <span data-v-8302dbff=""></span>
          <span data-v-8302dbff=""></span>
          <span data-v-8302dbff=""></span>
        </div>
        <section className="c-welcome" data-v-8302dbff>
          <div className="-w" data-v-8302dbff>
            <div className="-w-in">
              <h1
                className="head-1 -a-to-top-s-out"
                style={{ "--l-delay": "0" } as React.CSSProperties}
                data-v-8302dbff=""
              >
                <span data-v-8302dbff="">Your Own AI Call Center</span>
              </h1>
              <p
                data-v-8302dbff=""
                className="para-1 -a-to-top-s-out"
                style={{ "--l-delay": "0.15" } as React.CSSProperties}
              >
                OpenCall AI empowers your business, driving revenue, cutting
                overhead, and streamlining all phone activities for seamless
                operations.
              </p>
              <p
                data-v-8302dbff
                className="para-2 -a-to-top-s-out"
                style={{ "--l-delay": "0.3" } as React.CSSProperties}
              >
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Answer Questions
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Triage Callers
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Book Appointments
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Search Information
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={25}
                    width={25}
                  />
                  Custom Workflows
                </span>
              </p>
            </div>
            <footer className="footer-1" data-v-8302dbff>
              <div className="form-wrap" data-v-8302dbff>
                <div className="form-cta" data-v-8302dbff>
                  <div className="form" data-v-8302dbff>
                    <header data-v-8302dbff>
                      <figure>
                        <Image
                          src={icon}
                          alt="icon-img"
                          height={54}
                          width={54}
                        />
                      </figure>
                      <span className="-h5" data-v-8302dbff>
                        Get Started
                      </span>
                    </header>
                    <a
                      href="https://app.open-call.ai/api/auth/signup"
                      target="_blank"
                      className="button -p -b"
                      data-v-e3fde6b2
                    >
                      <span className="text" data-v-e3fde6b2>
                        <span data-label="Try OpenCall.ai" data-v-e3fde6b2>
                          <span data-v-e3fde6b2>Try OpenCall.ai</span>
                        </span>
                        <span className="-mm" data-v-e3fde6b2>
                          Risk Free
                        </span>
                      </span>
                      <svg data-v-3089695e data-v-e3fde6b2-s>
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
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
