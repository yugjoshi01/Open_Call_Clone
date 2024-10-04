import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import styleFooter from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styleFooter.c_footer} data-v-30a60abe>
      <div className={styleFooter.w} data-v-30a60abe>
        <div className={styleFooter.bg} data-v-30a60abe>
          <span data-v-30a60abe></span>
          <span data-v-30a60abe></span>
          <span data-v-30a60abe></span>
        </div>
        <div className={styleFooter.top} data-v-30a60abe>
          <a href="/" className={styleFooter.logo} data-v-568e58aa>
            <span className={styleFooter.l_symbol} data-v-568e58aa>
              <span data-v-568e58aa>
                <Image src={logo} alt="logo" height={48.6} width={48.6} />
              </span>
            </span>
            <span className={styleFooter.l_tt} data-v-568e58aa>
              <h1 className={styleFooter.h1}>OpenCall</h1>
              <h2 className={styleFooter.h2}>.ai</h2>
            </span>
          </a>
          <nav data-v-30a60abe>
            <div className={styleFooter.col} data-v-30a60abe>
              <span className={styleFooter.h5} data-v-30a60abe>
                Company
              </span>
              <a href="/" data-v-30a60abe>
                <span className={styleFooter.base} data-v-30a60abe>
                  About
                </span>
              </a>
              <a href="/" data-v-30a60abe>
                <span className={styleFooter.base} data-v-30a60abe>
                  Privacy
                </span>
              </a>
            </div>
            <div className={styleFooter.col} data-v-30a60abe>
              <span className={styleFooter.h5} data-v-30a60abe>
                Product
              </span>
              <a href="/" data-v-30a60abe>
                <span className={styleFooter.base} data-v-30a60abe>
                  Product
                </span>
              </a>
              <a href="/" data-v-30a60abe>
                <span className={styleFooter.base} data-v-30a60abe>
                  Pricing
                </span>
              </a>
            </div>
            <div className={styleFooter.col} data-v-30a60abe>
              <span className={styleFooter.h5} data-v-30a60abe>
                Platform
              </span>
              <a href="/" data-v-30a60abe>
                <span className={styleFooter.base} data-v-30a60abe>
                  Contacts
                </span>
              </a>
              <a href="/" data-v-30a60abe>
                <span className={styleFooter.base} data-v-30a60abe>
                  Login&nbsp;/&nbsp;Registration
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div className={styleFooter.bot} data-v-30a60abe>
          <div className={styleFooter.soc} data-v-30a60abe>
            <a href="/" target="_blank" data-v-30a60abe>
              <svg
                className={styleFooter.base}
                data-v-30a60abe
                height={18}
                width={18}
              >
                <use
                  href="#Capa_3"
                  data-v-30a60abe
                  height={22}
                  width={22}
                ></use>
              </svg>
              <svg
                className={styleFooter.hover}
                data-v-30a60abe
                height={18}
                width={18}
              >
                <use
                  href="#Capa_3"
                  data-v-30a60abe
                  height={22}
                  width={22}
                ></use>
              </svg>
            </a>
            <a href="/" target="_blank" data-v-30a60abe>
              <svg
                className={styleFooter.base}
                data-v-30a60abe
                height={20}
                width={18}
              >
                <use
                  href="#Capa_4"
                  data-v-30a60abe
                  height={22}
                  width={22}
                ></use>
              </svg>
              <svg
                className={styleFooter.hover}
                data-v-30a60abe
                height={20}
                width={18}
              >
                <use
                  href="#Capa_4"
                  data-v-30a60abe
                  height={22}
                  width={22}
                ></use>
              </svg>
            </a>
            <a href="/" target="_blank" data-v-30a60abe>
              <svg
                className={styleFooter.base}
                data-v-30a60abe
                height={25}
                width={25}
              >
                <use
                  href="#Capa_5"
                  data-v-30a60abe
                  height={25}
                  width={25}
                ></use>
              </svg>
              <svg
                className={styleFooter.hover}
                data-v-30a60abe
                height={25}
                width={25}
              >
                <use
                  href="#Capa_5"
                  data-v-30a60abe
                  height={25}
                  width={25}
                ></use>
              </svg>
            </a>
            <a href="/" target="_blank" data-v-30a60abe>
              <svg
                className={styleFooter.hover}
                data-v-30a60abe
                height={25}
                width={25}
              >
                <use
                  href="#Capa_6"
                  data-v-30a60abe
                  height={25}
                  width={25}
                ></use>
              </svg>
              <svg
                className={styleFooter.base}
                data-v-30a60abe
                height={25}
                width={25}
              >
                <use
                  href="#Capa_6"
                  data-v-30a60abe
                  height={25}
                  width={25}
                ></use>
              </svg>
            </a>
          </div>
          <div className={styleFooter.copy} data-v-30a60abe>
            <span data-v-30a60abe>Created in San Francisco</span>
            <span data-v-30a60abe>©2024 OpenCall.ai</span>
            <a href="/" target="_blank" data-v-30a60abe>
              Credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
