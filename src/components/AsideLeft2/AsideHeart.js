import heart from "./images/SVG/heart.png";
import hearthover from "./images/SVG/hearthover.png";
import heartring from "./images/SVG/heartring1.png";
import heartchecked from "./images/SVG/heartcheked.png";
import style from "./AsideLeft.module.scss";

const AsideHeart = () => {
  return (
    <div>
      <div className={style.asideIconbar}>
        <div className={style.asideIconContainer} data-count="1">
          <input
            type="checkbox"
            id="aside-icon-checkboxheart"
            className={style.checkBoxHider}
          />
          <label
            htmlFor="aside-icon-checkboxheart"
            className={style.checkedLabel}
            id="checkboxheaartlabel"
          >
            <img src={heart} alt="" className={style.asideIconDefault} />
            <img src={hearthover} alt="" className={style.asideIconHover} />
            <img src={heartring} alt="" className={style.bigring} />
            <img
              src={heartchecked}
              alt=""
              className={style.asideIconChecked}
              id="heart"
            />
          </label>
          <div className={style.asideCount} id="asidecount"></div>
        </div>
      </div>
    </div>
  );
};

export default AsideHeart;
