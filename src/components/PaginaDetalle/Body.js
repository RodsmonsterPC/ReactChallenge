import styles from "./PaginaDetalle.module.scss";
const Body = () => {
  return (
    <div class={`container-fluid ${styles.containerInputs}`}>
      <div className={`container ${styles.containerInputs}`}>
        <div className="row d-flex justify-content-center">
          <form className="mt-5 w-50">
            <div className="alerts_holder"></div>
            <div className={`${styles.containerPost}`}>
              <div className="" id={`${styles.containerInputs}`}>
                <div>
                  <input
                    type="text"
                    className={`${styles.postUrlImageInput}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="New post title here..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className={`${styles.postTitleInput}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="New post title here..."
                  />
                </div>
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className={`${styles.postTagsInput}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Add up to 4 tags..."
                  />
                </div>
              </div>
            </div>

            <div
              id="editor"
              className={`${styles.postBodyInput}`}
              placeholder="Write your post content here..."
            ></div>

            <button
              id="updateBtn"
              type="button"
              className={`btn btn-primary ${styles.btnCreatePost} mt-2`}
            >
              Update
            </button>

            <button
              id="deleteBtn"
              type="button"
              className={`btn btn-primary ${styles.btnDeletePost} mt-2`}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
