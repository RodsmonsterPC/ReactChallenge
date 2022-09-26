import styles from "../CreatePostButton/createPostButton.module.scss";
import { Link } from "react-router-dom";
const Button = ({ link, text }) => {
  return (
    <div>
      <Link to={link}>
        <button
          type="button"
          class={`btn btn-outline-primary  d-none d-md-block ${styles.createPost}`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};
export default Button;
