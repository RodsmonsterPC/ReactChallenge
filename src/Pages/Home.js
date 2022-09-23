import React, { useEffect, useState } from "react";
import { getPost } from "../Services/post2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
    navigate(`/detailpost/${id}`);
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
