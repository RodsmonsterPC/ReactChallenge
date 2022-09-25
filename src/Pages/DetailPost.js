import { useContext, useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft2/AsideLeft";
import AsideRight from "../components/AsideRight2/AsideRight";
import IdContext from "../components/context/idContext";
import Footer from "../components/Footer/Footer";
import { getPostId } from "../Services/post2";
import { useParams } from "react-router-dom";

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

  if (!post) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <AsideLeft />
      <div>{post.title}</div>
      <AsideRight />
      <Footer />
    </div>
  );
};

export default DetailPost;
