import React, { useEffect, useState } from "react";

import { getPost } from "../Services/post2";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MainAsideLeft from "../components/MainAsideLeft/MainAsideLeft";
import MainCentralContent from "../components/MainCentralContent/MainCentralContent";
import "../components/Home/Home.css";
import FirstPost from "../components/MainCentralContent/FirstPost";
import SecondaryPosts from "../components/MainCentralContent/SecondaryPosts";
import AsideRight from "../components/MainAsideRight/AsideRight";

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
    <div className="main__div">
      <Navbar />

      <div className="container">
        <div className="row container__content">
          <div className="col-md-3 mt-4 d-none d-md-block">
            <MainAsideLeft />
          </div>
          <div className="col d-block mt-4">
            <div>
              {posts.map((post, index) => {
                if (index === 0) {
                  return (
                    <div key={post._id} onClick={() => changePost(post._id)}>
                      <FirstPost post2render={post} />
                    </div>
                  );
                } else {
                  return (
                    <div key={post._id} onClick={() => changePost(post._id)}>
                      <SecondaryPosts post2render={post} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="col-lg-3 mt-4 d-none d-lg-block">
            <AsideRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
