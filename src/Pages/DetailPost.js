import { useContext, useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft2/AsideLeft";
import AsideRight from "../components/AsideRight2/AsideRight";

import Footer from "../components/Footer/Footer";
import { getPostId, updatePost } from "../Services/post2";
import styles from "../Pages/styles/DetailPost.module.scss";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetailPost = () => {
  const [update, setUpdate] = useState();
  const [erase, setErase] = useState();
  const [post, setPost] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleOnUpdate = async () => {
    navigate(`/editpost/${params.postId}`);
  };

  useEffect(() => {
    getPostId(params.postId).then((post) => {
      setPost(post);
    });
  }, []);
  console.log("post", post);
  if (!post) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div className={`d-flex container-fluid ${styles.containerPost}`}>
        {/* <Navbar */}
        <AsideLeft />
        <Card style={{ width: "1000px" }}>
          <Card.Img variant="top" src={`${post.urlImage}`} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <div className={`${styles.author}`}>{post.author}</div>
              <div className={`${styles.date}`}>{post.startDate}</div>
              <div className={`${styles.tags}`}>{post.tags}</div>
              <div className={`${styles.body}`}>{post.body}</div>
            </Card.Text>
            <button onClick={handleOnUpdate}>Update</button>
          </Card.Body>
        </Card>
        <AsideRight />
      </div>
      <Footer />
    </>
  );
};

export default DetailPost;
