import styles from '../CreatePostButton/createPostButton.module.scss'
import {Link} from "react-router-dom"
const CreatePostButton = () => {
  return (
    <div>
      <Link to={"CreatePost"}>
      <button
        type="button"
        class={`btn btn-outline-primary  d-none d-md-block ${styles.createPost}`}
      >
        Create Post
      </button>
      </Link>
    </div>
  );
};
export default CreatePostButton;