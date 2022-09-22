import AsideFlag from "./AsideFlag";
import AsideHeart from "./AsideHeart";
import AsideUnicorn from "./AsideUnicorn";

const AsideLeft = () => {
  return (
    <div>
      <aside className="col-md-2 col-lg-2 leftAside2 d-md-flex sticky-top">
        <AsideHeart />
        <AsideUnicorn />
        <AsideFlag />
      </aside>
    </div>
  );
};

export default AsideLeft;
