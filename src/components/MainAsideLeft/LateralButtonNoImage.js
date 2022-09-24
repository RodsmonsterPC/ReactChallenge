import './LateralTransparentButton.css'


const LateralButtonNoImage = ({data}) => {
    console.log(data);
    console.log(data.button_name);
    
  return (

    <button type="button" className="list-group-item list-group-item-action bg-transparent p-2 border-0 button__transparent">
        {data.button_name}
    </button>
      

  )
}

export default LateralButtonNoImage

