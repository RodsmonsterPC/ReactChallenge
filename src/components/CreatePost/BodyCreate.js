import { useState } from "react";
import styles from "./CreatePost.module.scss";

const BodyCreate = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [tags, setTags] = useState();
  const [text, setText] = useState();

  return (
    <div>
      <div className={`container-fluid ${styles.containerInputs}`}>
        <div className="row d-flex justify-content-center">
          <div className="alertHolder"></div>
          <div className={`${styles.containerPost}`}>
            <div className="" id="containerInputs">
              <div className={`${styles.addImage}`}>
                <input
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  className={`${styles.postUrlImageInput} rounded`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Add a cover image"
                />
              </div>

              <div>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className={`${styles.postTitleInput}  fw-bold`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="New post title here..."
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  onChange={(e) => setTags(e.target.value)}
                  type="text"
                  className={`${styles.postTagsInput}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Add up to 4 tags..."
                />
              </div>
            </div>

            <textarea
              onChange={(e) => setText(e.target.value)}
              id="editor"
              className={`${styles.postBodyInput}`}
              placeholder="Write your post content here..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className={`${styles.containerButtons}`}>
        <button
          type="button"
          className={`btn btn-primary ${styles.btnCreatePost} mt-2`}
        >
          Publish
        </button>

        <button
          type="button"
          className={`btn btn-primary ${styles.btnDeletePost} mt-2`}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default BodyCreate;
