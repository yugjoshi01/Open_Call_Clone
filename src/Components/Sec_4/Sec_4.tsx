import check from "@/Components/sec_1/images/check.png";
import Image from "next/image";
import style4 from "./Sec_4.module.css";

function Sec_4() {
  return (
    <section className={style4.c_setup}>
      <div className={style4.setup_wrap}>
        <div className={style4.bg} data-v-86882c82>
          <span data-v-86882c82></span>
          <span data-v-86882c82></span>
        </div>
        <header data-v-86882c82>
          <span className={style4.b_title} data-v-86882c82>
            Try It Now
          </span>
          <div data-v-86882c82>
            <span className={style4.slide_title} data-v-86882c82>
              Select Demo
            </span>
          </div>
        </header>
        <div className={style4.slide_wrap} data-v-86882c82>
          <div className={style4.active_slide_role} data-v-86882c82>
            <div className={style4.ul} data-v-86882c82>
              <div
                className={style4.item}
                style={{ "--far-from": "0" } as React.CSSProperties}
                data-v-86882c82
              >
                <div data-v-86882c82>
                  <span className={style4.name} data-v-86882c82>
                    Salon Receptionist
                  </span>
                  <span className={style4.details} data-v-86882c82>
                    Discover our AI's exceptional conversational skills,
                    efficient scheduling capabilities, and intelligent transfer
                    features.
                  </span>
                  <span className={style4.creator} data-v-86882c82>
                    <span data-v-86882c82>Name:&nbsp;</span>
                    <span data-v-86882c82>Skye</span>
                  </span>
                </div>
                <figure data-v-86882c82>
                  <Image src={check} alt="check" height={36} width={36} />
                </figure>
                <span className={style4.overlay} data-v-86882c82></span>
              </div>
              <div
                className={style4.item}
                style={{ "--far-from": "1" } as React.CSSProperties}
                data-v-86882c82
              >
                <div data-v-86882c82>
                  <span className={style4.name} data-v-86882c82>
                    Transportation Specialist
                  </span>
                  <span className={style4.details} data-v-86882c82>
                    Specialized for passenger transportation, this AI
                    streamlines ride bookings via SMS, reducing intake time and
                    boosting efficiency.
                  </span>
                  <span className={style4.creator} data-v-86882c82>
                    <span data-v-86882c82>Name:&nbsp;</span>
                    <span data-v-86882c82>Julie</span>
                  </span>
                </div>
                <figure data-v-86882c82>
                  <Image src={check} alt="check" height={36} width={36} />
                </figure>
                <span className={style4.overlay} data-v-86882c82></span>
              </div>
              <div
                className={style4.item}
                style={{ "--far-from": "2" } as React.CSSProperties}
                data-v-86882c82
              >
                <div data-v-86882c82>
                  <span className={style4.name} data-v-86882c82>
                    Assistant 2.0
                  </span>
                  <span className={style4.details} data-v-86882c82>
                    This AI helps you do work. It's connected to the internet
                    and can answer any question.
                  </span>
                  <span className={style4.creator} data-v-86882c82>
                    <span data-v-86882c82>Name:&nbsp;</span>
                    <span data-v-86882c82>Petunia</span>
                  </span>
                </div>
                <figure data-v-86882c82>
                  <Image src={check} alt="check" height={36} width={36} />
                </figure>
                <span className={style4.overlay} data-v-86882c82></span>
              </div>
            </div>
          </div>
        </div>
        <footer data-v-86882c82>
          <div className={style4.step_wrap} data-v-86882c82>
            <p data-v-86882c82>Pick an AI to Call</p>
          </div>
          <div className={style4.slider_nav} data-v-86882c82>
            <span className={style4.active_slide_role} data-v-86882c82></span>
            <span data-v-86882c82></span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Sec_4;
