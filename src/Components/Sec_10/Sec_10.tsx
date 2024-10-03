import Image from "next/image";
import enter from "../../../public/images/enter.png";
import style10 from "./Sec_10.module.css";

function Sec_10() {
  return (
    <section className={style10.c_faq} data-v-5827e503 data-v-e2c0c49b>
      <div data-v-5827e503 className={style10.w}>
        <div data-v-5827e503 className={style10.bg}>
          <span data-v-5827e503></span>
          <span data-v-5827e503></span>
        </div>
        <div data-v-5827e503 className={style10.chatbox}>
          <div data-v-5827e503 className={style10.body}>
            <div data-v-5827e503 className={style10.messages_wrap}></div>
          </div>
        </div>
        <header data-v-5827e503>
          <div data-v-5827e503>
            <span data-v-5827e503 className={style10.h4}>
              FAQ
            </span>
          </div>
        </header>
        <div data-v-5827e503 className={style10.basic_list}>
          <div data-v-5827e503 className={style10.question}>
            <div data-v-5827e503>
              <span data-v-5827e503 className={style10.mm}>
                What exactly does OpenCall.ai do?
              </span>
            </div>
          </div>
          <div data-v-5827e503 className={style10.question}>
            <div data-v-5827e503>
              <span data-v-5827e503 className={style10.mm}>
                How quickly can we start using OpenCall.ai?
              </span>
            </div>
          </div>
          <div data-v-5827e503 className={style10.question}>
            <div data-v-5827e503>
              <span data-v-5827e503 className={style10.mm}>
                Will OpenCall.ai work with our existing systems?
              </span>
            </div>
          </div>
          <div data-v-5827e503 className={style10.question}>
            <div data-v-5827e503>
              <span data-v-5827e503 className={style10.mm}>
                Is OpenCall.ai difficult to use?
              </span>
            </div>
          </div>
          <div data-v-5827e503 className={style10.question}>
            <div data-v-5827e503>
              <span data-v-5827e503 className={style10.mm}>
                Can OpenCall.ai handle high call volumes?
              </span>
            </div>
          </div>
          <div data-v-5827e503 className={style10.question}>
            <div data-v-5827e503>
              <span data-v-5827e503 className={style10.mm}>
                How do I get started?
              </span>
            </div>
          </div>
        </div>
        <footer data-v-5827e503 className={style10.field_wrap}>
          <div data-v-5827e503 className={style10.field}>
            <div data-v-5827e503 className={style10.i_input}>
              <input
                data-v-5827e503=""
                type="text"
                placeholder="Ask your own question"
              />
            </div>
            <button data-v-5827e503 className={style10.button}>
              <Image src={enter} alt="enter" height={36} width={36} />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Sec_10;
