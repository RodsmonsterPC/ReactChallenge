import styles from '../CreatePostButton/createPostButton.module.scss'
const CreatePostButton = () => {
  return (
    <div>
      <a href="./createPost.html">
      <button
        type="button"
        class={`btn btn-outline-primary  d-none d-md-block ${styles.createPost}`}
      >
        Create Post
      </button>
      </a>
    </div>
  );
};
export default CreatePostButton;