import unicorn from "./images/SVG/unicorn.png";
import unicornHover from "./images/SVG/unicornhover.png";
import unicornRingin from "./images/SVG/ringunicorn.png";
import unicornChecked from "./images/SVG/unicorncheked.png";

import style from "./AsideLeft.module.scss";

const AsideUnicorn = () => {
  return (
    <div>
      <div className={style.asideIconbar}>
        <div className={style.asideIconContainer}>
          <input
            type="checkbox"
            id="aside-icon-checkboxunicorn"
            className={style.checkBoxHider}
          />
          <label
            htmlFor="aside-icon-checkboxunicorn"
            className={style.checkedLabel}
          >
            <img src={unicorn} alt="" className={style.asideIconDefault} />
            <img src={unicornHover} alt="" className={style.asideIconHover} />
            <img src={unicornRingin} alt="" className={style.bigring} />
            <img
              src={unicornChecked}
              alt=""
              className={style.asideIconChecked}
              id="unicorn"
            />
          </label>
          <div className={style.asideCount}>
            <small></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideUnicorn;
