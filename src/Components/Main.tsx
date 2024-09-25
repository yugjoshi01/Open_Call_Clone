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
