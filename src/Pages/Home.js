import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getPost } from "../Services/post2";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import MainAsideLeft from '../components/MainAsideLeft/MainAsideLeft'
import '../components/Home/Home.css'




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
      <Navbar/>
      
    <div className="container">
      <div className="row container__content">
        <div className="col-3 mt-4">
          <MainAsideLeft/>
        </div>
        <div className="col-6 mt-4">
          CENTER CONTAINTER
        </div>
        <div className="col-3 mt-4">
          RIGHT CONTAINER
        </div>
      </div>
    </div>
  










    <div>
      {posts.map((post) => {
        return (
          <div key={post._id} onClick={() => changePost(post._id)}>
            {post.title}
          </div>
        );
      })}
    </div>
  
  </div>

  );
};

export default Home;
