import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BodyCreate from "../components/CreatePost/BodyCreate";
import NavbarCreate from "../components/CreatePost/NavbarCreate";

import { getPostId } from "../Services/post2";

const EditPost = () => {
  const params = useParams();
  const token = localStorage.getItem("token");
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
      <NavbarCreate />
      <BodyCreate post={post} token={token} />
    </div>
  );
};

export default EditPost;
