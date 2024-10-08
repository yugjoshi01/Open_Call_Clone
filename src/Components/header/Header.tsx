"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../public/images/logo.svg";
import styleHead from "./Header.module.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setScrolled(window.scrollY > 50);
        setFooterVisible(
          footerRect.top <= window.innerHeight && footerRect.bottom >= 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styleHead.header} ${scrolled ? styleHead.scrolled : ""} ${
        footerVisible ? styleHead.hide : ""
      }`}
      data-v-568e58aa
    >
      <div className={styleHead.w} data-v-568e58aa>
        <a
          href="/"
          className={styleHead.logo}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          data-v-568e58aa
        >
          <span className={styleHead.l_symbol} data-v-568e58aa>
            <span data-v-568e58aa>
              <Image
                src={logo}
                alt="logo"
                height={48.6}
                width={48.6}
                className={`logo-img ${
                  logoHovered ? styleHead.originalSize : ""
                }`}
              />
            </span>
          </span>

          <span
            className={`${styleHead.l_tt} ${
              scrolled ? styleHead.hideTitle : ""
            } ${logoHovered ? styleHead.showTitle : ""}`}
            data-v-568e58aa
          >
            <h1 className={styleHead.h1}>OpenCall</h1>
            <h2 className={styleHead.h2}>.ai</h2>
          </span>
        </a>

        <nav className={styleHead.nav} data-v-568e58aa>
          <a href="/" data-v-568e58aa>
            <span className={styleHead.base} data-v-568e58aa>
              About
            </span>
          </a>
          <a href="/" data-v-568e58aa>
            <span className={styleHead.base} data-v-568e58aa>
              Product
            </span>
          </a>
          <a href="/" data-v-568e58aa>
            <span className={styleHead.base} data-v-568e58aa>
              Pricing
            </span>
          </a>
        </nav>

        <a
          href="https://app.open-call.ai/api/auth/signup"
          target="_blank"
          className={`${styleHead.button} ${styleHead.p} ${styleHead.b}`}
          data-v-e3fde6b2
        >
          <span className={styleHead.text} data-v-e3fde6b2>
            <span data-label="Sign In" data-v-e3fde6b2>
              <span data-v-e3fde6b2>Sign In</span>
            </span>
          </span>
          <svg data-v-3089695e data-v-e3fde6b2-s className={styleHead.svg_icon}>
            <use href="#Capa_2" data-v-3089695e data-v-e3fde6b2-s></use>
          </svg>
        </a>
      </div>
    </header>
  );
}
export default Header;
