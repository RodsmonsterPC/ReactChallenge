// import { useContext, useEffect, useState } from "react";
// import IdContext from "../components/context/idContext";
import Body from "../components/PaginaDetalle/Body";
import Navbar from "../components/PaginaDetalle/Navbar";
// import { getPostId } from "../Services/post";

const EditPost = () => {
  //   const { id } = useContext(IdContext);

  //   const [post, setPost] = useState();
  //   useEffect(() => {
  //     getPostId(id).then((post) => {
  //       setPost(post);
  //     });
  //   }, []);

  //   if (!post) {
  //     return <div>Cargando...</div>;
  //   }

  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default EditPost;
