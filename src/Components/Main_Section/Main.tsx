import Sec1 from "../sec_1/Sec1";
import Sec2 from "../Sec_2/Sec2";
import Sec_3 from "../Sec_3/Sec_3";
import styleMain from "./Main.module.css";

function Main() {
  return (
    <main className={styleMain.main}>
      <Sec1 />
      <Sec2 />
      <Sec_3 />
    </main>
  );
}

export default Main;
