import style from "./CentralBody.module.scss"
import profilePicture from "./img/profile.webp"
import CardCentralBody from "./CardCentralBody"

const CentralBody = () => {
return(
    
        <main id="main-container" class="cotainer col-xs-12 m-0 col-md-6 offset-md-2 col-xl-6 main bg-white">

            <hr/>

            {/* <h2 className="pt-5">Discussion(11)</h2> */}

            <div className="autor d-flex mx-4 pt-5 ">

                <div>
                    <img src={profilePicture} className={style.avatarEntryTwo}/>
                </div>

                <div className={`mx-4 ${style.autorProperties}`}>
                    <form action="">
                        <textarea rows="rows" name="name" className={style.textArea}>Add to the disscussion</textarea>
                    </form>
                </div>

            </div>


            <CardCentralBody/>

        </main>
    
    );
};

export default CentralBody