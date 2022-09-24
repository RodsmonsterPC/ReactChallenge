import React from 'react'
import "./MainCentralContent.css"
import reactions from './Images/reactions.png';
import comments from './Images/comments.png';
import save from  './Images/save.png';

const SecondaryPosts = ({post2render}) => {
    const cardImage = post2render.urlImage;
    const author = post2render.author;
    const postTitle = post2render.title;
    const urlAvatar = `https://robohash.org/${author}`
    const date = post2render.startDate;
    const tags = post2render.tags;
    console.log(post2render)
    console.log(post2render.urlImage)
  return (
    <>
    <div className="card__container mb-4 ">

        <div className="card__content mt-4">
            <div className="card__user-avatar">
                <img className="card__user__img__avatar img-fluid rounded-circle ms-3" src={urlAvatar} alt=""/>
            </div>
            <div className="card__text-content ms-2">
                <div> 
                    <p className="m-0 p-0">{author}</p>
                    <p className="m-0 p-o"><small class="text-muted">{date}</small></p>
                </div>
                <div className="mt-3">
                    <h2>{postTitle}</h2>
                </div>
                <button type="button" class="btn btn-outline-info">{tags}</button>
                <div className="card__down-buttons">
                    <div className="d-flex me-2">
                        <a className="d-inline-block" href=""><img className="small_icon" src={reactions} alt=""/>Reactions</a>
                        <a className="d-inline-block" href=""><img className="small_icon" src={comments} alt=""/>Comments</a>
                    </div>
                    <div className="d-flex ms-5">
                        <p className="me-2">3 min read</p>
                        <a href=""><img className="small_icon" src={save} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SecondaryPosts
