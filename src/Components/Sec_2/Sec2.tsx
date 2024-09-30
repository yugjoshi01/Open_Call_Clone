import downArr from "@/Components/sec_1/images/check.png";
import Image from "next/image";
import style2 from "./Sec2.module.css";

function Sec2() {
  return (
    <>
      <section
        data-v-66c1d44b
        data-v-e2c0c49b
        className={style2.c_catalyst}
        id="catalyst"
      >
        <div className={style2.w} data-v-66c1d44b>
          <div className={style2.title} data-v-66c1d44b>
            <div className={style2.l} data-v-66c1d44b>
              <span data-v-66c1d44b className={style2.h3}>
                Turn Missed Calls Into Profit
              </span>
              <p className={style2.a_to_top} data-v-66c1d44b>
                OpenCall.ai improves sales, customer satisfaction, and margin.
              </p>
              <span className={style2.check} data-v-31c285db data-v-66c1d44b>
                <Image
                  className={style2.check_img}
                  alt="downArr"
                  src={downArr}
                  height={26}
                  width={26}
                />
                <span data-v-31c285db className="mm">
                  Unlimited capacity
                </span>
              </span>
              <span data-v-31c285db data-v-66c1d44b className={style2.check}>
                <Image
                  className={style2.check_img}
                  alt="downArr"
                  src={downArr}
                  height={26}
                  width={26}
                />
                <span data-v-31c285db className="mm">
                  24/7 availability
                </span>
              </span>
            </div>
            <div className={style2.r} data-v-66c1d44b>
              <span className={style2.h5} data-v-66c1d44b>
                Make Your Customers Happy
              </span>
              <p className={style2.a_to_top} data-v-66c1d44b>
                Eliminating wait times alone can increase revenue up to 50%. We
                go further with the best "human touch" in the industry. Every
                business gets a unique AI that feels like an extension of your
                staff, not a 3rd party.
              </p>
            </div>
            <div className={style2.toggle} data-v-66c1d44b>
              <span className={style2.m} data-v-66c1d44b>
                With OpenCall AI
              </span>
              <button
                data-v-64f81779
                data-v-66c1d44b
                className={style2.toggle_btn}
              ></button>
            </div>
          </div>
          <div data-v-66c1d44b className={style2.middle}>
            <div className={style2.loader}>
              <div className={style2.intern}></div>
              <div className={style2.external_shadow}>
                <div className={style2.central}></div>
              </div>
            </div>
          </div>
          <footer data-v-66c1d44b className={style2.footer}>
            <a
              href="https://app.open-call.ai/api/auth/signup"
              target="_blank"
              className={`${style2.button} ${style2.p} ${style2.b}`}
              data-v-e3fde6b2
            >
              <span className={style2.text} data-v-e3fde6b2>
                <span data-label="Try OpenCall.ai" data-v-e3fde6b2>
                  <span data-v-e3fde6b2>Try OpenCall.ai</span>
                </span>
                <span className={style2.mm} data-v-e3fde6b2>
                  Risk Free
                </span>
              </span>
              <svg
                data-v-3089695e
                data-v-e3fde6b2-s
                className={style2.svg_icon}
              >
                <use href="#Capa_1" data-v-3089695e data-v-e3fde6b2-s></use>
              </svg>
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Sec2;
