import Bathroom from "../Bathroom/Bathroom";
import Kitchen from "../Kitchen/Kitchen";
import Room from "../Room/Room";
import css from "./WorkInclude.module.css";

const WorkInclude = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>У роботу входить</h2>
        <Room />
        <Kitchen />
        <Bathroom />
      </div>
    </section>
  );
};

export default WorkInclude;