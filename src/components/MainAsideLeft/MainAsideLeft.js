import React from 'react'
import { MainButtons,
         OtherButtons,
         TagsButtons
 } from '../../helpers/right_lateral_buttons'; 
import LateralTransparentButton from './LateralTransparentButton';
import LateralButtonNoImage from './LateralButtonNoImage';
import "./MainAside.css";

const MainAsideLeft = () => {
  return (
    <>
            {
            MainButtons.map((btnData)=>{
            return(
                <LateralTransparentButton data={btnData}/>
            );
             
            })
            }
            <h5 className="mt-5">Others</h5>
            {
            OtherButtons.map((btnData)=>{
            return(
                <LateralTransparentButton data={btnData}/>
            );
             
            })
            }
            <h5 className="mt-5">My Tags</h5>
            {
            TagsButtons.map((btnData)=>{
            return(
                <LateralButtonNoImage data={btnData}/>
            );
             
            })
            }
    </>
  )
}

export default MainAsideLeft;