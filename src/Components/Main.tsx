import downImage from "@/CssFile/images/check-mark.png";
import "@/CssFile/Main.css";
import Image from "next/image";

function Main() {
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
                className="head-1"
                style={{ "--l-delay": "0" } as React.CSSProperties}
              >
                <span data-v-8302dbff="">Your Own AI Call Center</span>
              </h1>
              <p
                data-v-8302dbff=""
                className="para-1"
                style={{ "--l-delay": "0.15" } as React.CSSProperties}
              >
                OpenCall AI empowers your business, driving revenue, cutting
                overhead, and streamlining all phone activities for seamless
                operations.
              </p>
              <p
                data-v-8302dbff
                className="para-2"
                style={{ "--l-delay": "0.3" } as React.CSSProperties}
              >
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={36}
                    width={36}
                  />
                  Answer Questions
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={36}
                    width={36}
                  />
                  Triage Callers
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={36}
                    width={36}
                  />
                  Book Appointments
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={36}
                    width={36}
                  />
                  Search Information
                </span>
                <span data-v-8302dbff>
                  <Image
                    className="downImage"
                    src={downImage}
                    alt="downImage"
                    height={36}
                    width={36}
                  />
                  Custom Workflows
                </span>
              </p>
            </div>
            <footer className="footer-1" data-v-8302dbff>
              <div className="form-wrap" data-v-8302dbff>
                <div className="form-cta" data-v-8302dbff>
                  <div className="form" data-v-8302dbff></div>
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
