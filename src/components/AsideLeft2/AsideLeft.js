import AsideFlag from "./AsideFlag";
import AsideHeart from "./AsideHeart";
import AsideUnicorn from "./AsideUnicorn";
import style from "./AsideLeft.module.scss";
const AsideLeft = () => {
  return (
    <aside
      className={`col-md-2 col-lg-2 ${style.leftAside2} d-md-flex flex-column sticky-top`}
    >
      <AsideHeart />
      <AsideUnicorn />
      <AsideFlag />
    </aside>
  );
};

export default AsideLeft;
