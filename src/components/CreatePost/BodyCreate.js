import { useState } from "react";
import styles from "./CreatePost.module.scss";
import { postPost, updtaePost } from "../../Services/post2";
import { useNavigate } from "react-router-dom";

const BodyCreate = ({ post }) => {
  console.log(post);
  const [image, setImage] = useState(post?.urlImage);
  const [title, setTitle] = useState(post?.title);
  const [tags, setTags] = useState(post?.tags);
  const [text, setText] = useState(post?.body);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const body = {
      urlImage: image,
      title: title,
      tags: tags,
      body: text,
    };
    try {
      if (post?._id) {
        const updatedPost = await updtaePost(post._id, body);
        navigate(`/detailpost/${post._id}`);
      } else {
        const newPost = await postPost(body);
        navigate("/");
      }
    } catch {
      alert("Error al guardar datos");
    }
  };
  return (
    <div>
      <div className={`container-fluid ${styles.containerInputs}`}>
        <div className="row d-flex justify-content-center">
          <div className="alertHolder"></div>
          <div className={`${styles.containerPost}`}>
            <div className="" id="containerInputs">
              <div className={`${styles.addImage}`}>
                <input
                  value={image}
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
                  value={title}
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
                  value={tags}
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
              value={text}
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
          onClick={handleSubmit}
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
