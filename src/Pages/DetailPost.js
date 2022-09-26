import { useContext, useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft2/AsideLeft";
import AsideRight from "../components/AsideRight2/AsideRight";
import IdContext from "../components/context/idContext";
import Footer from "../components/Footer/Footer";
import { getPostId } from "../Services/post2";
import { useParams } from "react-router-dom";
import styles from "../Pages/styles/DetailPost.module.scss"
import Card from 'react-bootstrap/Card';
const DetailPost = () => {
  const { id } = useContext(IdContext);
  console.log(id);

  const params = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    getPostId(params.postId).then((post) => {
      setPost(post);
    });
  }, []);
console.log('post', post)
  if (!post) {
    return <div>Cargando...</div>;
  }
  return (
    <>
    <div className={`d-flex container-fluid ${styles.containerPost}`}>
    <AsideLeft />
     <Card style={{ width: '1000px' }}>
      <Card.Img variant="top" src={`${post.urlImage}`} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
         <div className={`${styles.author}`}>{post.author}</div> 
         <div className={`${styles.date}`}>{post.startDate}</div> 
         <div className={`${styles.tags}`}>{post.tags}</div> 
          <div className={`${styles.body}`}>{post.body}</div>
        </Card.Text>        
      </Card.Body>
    </Card>
    <AsideRight />
    </div>
      <Footer />
      </>
  );
};

export default DetailPost;
