import Sec1 from "../sec_1/Sec1";
import Sec2 from "../Sec_2/Sec2";
import Sec_3 from "../Sec_3/Sec_3";
import Sec_4 from "../Sec_4/Sec_4";
import Sec_6 from "../Sec_6/Sec_6";
import Sec_7 from "../Sec_7/Sec_7";
import Sec_8 from "../Sec_8/Sec_8";
import styleMain from "./Main.module.css";

function Main() {
  return (
    <main className={styleMain.main}>
      <Sec1 />
      <Sec2 />
      <Sec_3 />
      <Sec_4 />
      <Sec_6 />
      <Sec_7 />
      <Sec_8 />
    </main>
  );
}

export default Main;
