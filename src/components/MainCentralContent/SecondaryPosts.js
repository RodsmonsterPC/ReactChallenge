import React from 'react'
import "./MainCentralContent.css"
import reactions from './Images/reactions.png';
import comments from './Images/comments.png';
import save from  './Images/save.png';
import {parse_date} from '../../helpers/parse_date'

const SecondaryPosts = ({post2render}) => {
    const author = post2render.author;
    const postTitle = post2render.title;
    const urlAvatar = `https://robohash.org/${author}`
    const date = post2render.startDate;
    const tags = post2render.tags;
    const likes = post2render.reactions.likes;

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
                    <p className="m-0 p-o"><small class="text-muted">{parse_date(date)}</small></p>
                </div>
                <div className="mt-3">
                    <h2>{postTitle}</h2>
                </div>
                <button type="button" class="btn btn-outline-info">{tags}</button>
                <div className="card__down-buttons mt-4">
                    <div className="d-flex ">
                        <a className="down-link d-inline-block me-2" href=""><img className="small_icon" src={reactions} alt=""/>{likes} Reactions</a>
                        <a className="down-link d-inline-block" href=""><img className="small_icon" src={comments} alt=""/>{Math.floor(Math.random()*10)} Comments</a>
                    </div>
                    <div className="d-flex ">
                        <p className="down-link me-2">3 min read</p>
                        <a href="" className="down-link"><img className="small_icon" src={save} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SecondaryPosts
