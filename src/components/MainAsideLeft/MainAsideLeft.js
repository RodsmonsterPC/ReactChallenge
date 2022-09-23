import React from 'react'
import home from './images/home.png'
import achive from './images/achive.png'
import listings from './images/listings.png'
import podcast from './images/podcast.png'
import videocam from './images/videocam.png'
import tag from './images/tag.png'
import faq from './images/faq.png'
import foremShop from './images/foremShop.png'
import sponsors from './images/sponsors.png'
import rainbow from './images/rainbow.png'
import contact from './images/contact.png'
import guides from './images/guides.png'
import codeOfConduct from './images/codeOfConduct.png'
import policy from './images/policy.png'
import eyes from './images/eyes.png'
import facebook from './images/facebook.png'
import github from './images/github.png'
import twitch from './images/twitch.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'

import "./MainAside.css";


export const MainAsideLeft = () => {
  return (
        <div>
            
        <aside className="aside1 bg-transparent col-3 col-md-3 left-aside d-none d-md-block">
        <div className="list-group d-flex ">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={home}/><span className="ms-2">Home </span>
            </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={achive}/><span className="ms-2">Reading
                    List </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={listings}/><span className="ms-2">Listings
                </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={podcast}/><span className="ms-2">Podcasts
                </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={videocam}/><span className="ms-2">Videos
                </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={tag}/><span className="ms-2">Tags </span>
            </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={faq}/><span className="ms-2">FAQ </span>
            </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={foremShop}/><span className="ms-2">Forem
                    Shop </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={sponsors}/><span className="ms-2">Sponsors
                </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={rainbow}/><span className="ms-2">About
                </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={contact}/><span className="ms-2">Contact
                </span> </a>
        </div>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={guides}/><span className="ms-2">Guides
                </span> </a>
        </div>

        <h5 className="pt-5">Others</h5>
        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={codeOfConduct}/><span className="ms-2">Code of Conduct
                </span> </a>
        </div>

        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={policy}/><span className="ms-2">Privacy Policy
                </span> </a>
        </div>

        <div className="list-group d-flex">
            <a href="#" className="list-group-item group-item-aside border-0"><img className="mainAside__list_icon" src={eyes}/><span className="ms-2">Terms of Use
                </span> </a>
        </div>


        <div className="logos d-flex gap-1 mt-5  ms-0 justify-content-between d-row">
            <div className="smallIcon tw">
                <img className="mainAside__small_icon" src={twitter} alt=""/>
            </div>
            <div className="smallIcon face">
                <img className="mainAside__small_icon" src={facebook} alt=""/>
            </div>
            <div className="smallIcon git">
                <img className="mainAside__small_icon" src={github} alt=""/>
            </div>
            <div className="smallIcon ig">
                <img className="mainAside__small_icon" src={instagram} alt=""/>
            </div>
            <div href="https://www.twitch.tv/thepracticaldev" class="smallIcon twitch">
                <img className="mainAside__small_icon" src={twitch} alt=""/>
            </div>
        </div>  

        <h5 className="pt-5">My Tags</h5>   

        <div class="list-group">
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#ubuntu</span> </a>
                </div>
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#opensource </span> </a>
                </div>
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#aws </span> </a>
                </div>
                <div className="list-group d-flex ">
                    <a href="#" className="list-group-item border-0 tag__item"><span class="ms-2">#machinelearning</span> </a>
                </div>
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#linux </span> </a>
                </div>
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#cpp </span> </a>
                </div>
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#python</span> </a>
                </div>
                <div className="list-group d-flex tag__item">
                    <a href="#" className="list-group-item border-0"><span class="ms-2">#git </span> </a>
                </div>
            </div>   




                    
        </aside>
    </div>

  )
}

