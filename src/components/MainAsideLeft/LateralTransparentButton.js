import React from 'react'
import './LateralTransparentButton.css'

const LateralTransparentButton = ({data}) => {
  console.log(data);
  console.log(data.button_name);
  console.log(data.imageUrl);

  return (
    <button type="button" className="list-group-item list-group-item-action bg-transparent p-2 border-0 button__transparent">
        <img className="me-2 ms-3 small__icon__right-aside" src={data.imageUrl} alt="home"/> {data.button_name}
    </button>
  )
}

export default LateralTransparentButton
