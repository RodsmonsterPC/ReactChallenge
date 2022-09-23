import React, { useEffect, useState } from "react";
import { getPost } from "../Services/post";
import IdContext from "../components/context/idContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { changeId } = useContext(IdContext);

  const [posts, setPosts] = useState();
  useEffect(() => {
    getPost().then((posts) => {
      setPosts(posts);
    });
  }, []);

  if (!posts) {
    return <div>Cargando...</div>;
  }

  const changePost = (id) => {
    changeId(id);
    navigate("/detailpost");
  };
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id} onClick={() => changePost(post._id)}>
            {post.title}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
