import Image from "next/image";
import img1 from "../../../public/images/img1.svg";
import img2 from "../../../public/images/img2.svg";
import img3 from "../../../public/images/img3.svg";
import img4 from "../../../public/images/img4.svg";
import style7 from "./Sec_7.module.css";

function Sec_7() {
  return (
    <section className={style7.c_benefits} data-v-e2c0c49b data-v-c40dc417>
      <div className={style7.w} data-v-c40dc417>
        <span className={style7.h4} data-v-c40dc417>
          Why OpenCall AI Makes Sense For You
        </span>
        <div className={style7.ul} data-v-c40dc417>
          <div className={style7.li} data-v-c40dc417>
            <figure data-v-c40dc417>
              <Image
                src={img1}
                alt="img1"
                height={108}
                width={108}
                data-v-c40dc417
              />
            </figure>
            <div className={style7.tt} data-v-c40dc417>
              <span className={style7.h5} data-v-c40dc417>
                Easy
              </span>
              <p className={style7.para} data-v-c40dc417>
                We do everything for you, from onboarding to integrations.
                Deploy OpenCall.ai for one of your locations in 5 minutes, and
                expand to others in seconds.
              </p>
            </div>
          </div>
          <div className={style7.li} data-v-c40dc417>
            <figure data-v-c40dc417>
              <Image
                src={img2}
                alt="img2"
                height={108}
                width={108}
                data-v-c40dc417
              />
            </figure>
            <div className={style7.tt} data-v-c40dc417>
              <span className={style7.h5} data-v-c40dc417>
                Powerful
              </span>
              <p className={style7.para} data-v-c40dc417>
                Our propriety AI builder takes customization from weeks to
                minutes. OpenCall.ai handles any workflow and integrates with
                almost any software.
              </p>
            </div>
          </div>
          <div className={style7.li} data-v-c40dc417>
            <figure data-v-c40dc417>
              <Image
                src={img3}
                alt="img3"
                height={108}
                width={108}
                data-v-c40dc417
              />
            </figure>
            <div className={style7.tt} data-v-c40dc417>
              <span className={style7.h5} data-v-c40dc417>
                Private
              </span>
              <p className={style7.para} data-v-c40dc417>
                We never train our models on your data. And our HIPAA-compliant
                system never sends your data to 3rd parties like OpenAI.
              </p>
            </div>
          </div>
          <div className={style7.li} data-v-c40dc417>
            <figure data-v-c40dc417>
              <Image
                src={img4}
                alt="img4"
                height={108}
                width={108}
                data-v-c40dc417
              />
            </figure>
            <div className={style7.tt} data-v-c40dc417>
              <span className={style7.h5} data-v-c40dc417>
                Reliable
              </span>
              <p className={style7.para} data-v-c40dc417>
                OpenCall.ai uses a mesh of specialized AIs to make common
                problems impossible. From redundant cloud providers to branding
                enforcement, we do everything to make sure phone calls aren't a
                bother.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec_7;
