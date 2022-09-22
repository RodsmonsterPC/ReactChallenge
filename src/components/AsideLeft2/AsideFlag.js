import save from "./images/SVG/save.png";
import saveHover from "./images/SVG/savehover.png";
import saveRing from "./images/SVG/savering1.png";
import saveChecked from "./images/SVG/savercheked.png";
import style from "./AsideLeft.module.scss";

const AsideFlag = () => {
  return (
    <div>
      <div className={style.asideIconbar}>
        <div className={style.asideIconContainer}>
          <input
            type="checkbox"
            id="aside-icon-checkboxsave"
            className={style.checkBoxHider}
          />
          <label
            htmlFor="aside-icon-checkboxsave"
            className={style.checkedLabel}
          >
            <img src={save} alt="" className={style.asideIconDefault} />
            <img src={saveHover} alt="" className={style.asideIconHover} />
            <img src={saveRing} alt="" className={style.bigring} />
            <img
              src={saveChecked}
              alt=""
              className={style.asideIconChecked}
              id="save"
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

export default AsideFlag;
