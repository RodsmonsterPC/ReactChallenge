import React from 'react'
import podcastImage from '../../images/podcasts.png'

const Podcast = () => {
  return (
    <div>
        <li className="nav-item d-flex align-items-center justify-content-start">
                    <img src={podcastImage} alt="image" />
                    <a className="nav-link active" aria-current="page" href="#">
                      Podcasts
                    </a>
                  </li>
    </div>
  )
}

export default Podcast