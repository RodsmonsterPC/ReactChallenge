import style from "./CentralBody.module.scss"
import profilePicture from "./img/profile.webp"
import commentLogo from "./img/comment.png"
import likeLogo from "./img/like.png"

const CardCentralBody = () => {

    return (
        <div class="autor d-flex mx-4 pt-5 pb-5">
            <div>
                <img src={profilePicture} className={style.avatarEntryTwo} />
            </div>

            <div className={`mx-4 ${style.autorProperties}`}>
                <div className={style.commentBox}>

                    <p class="pt-3"> Manuer Artero Anguita <span className="text-secondary"> Jun 16 - Edited on Jun 16</span></p>

                    <p className="pt-3">
                        Maybe we can try a different reading?

                        Maybe the "standard" fall for any technology approach git numbers (80-90%) ... while CSS is the one that
                        highlights (falling just 40-50%)? maybe because side-projects trend to need cool shadow-boxes ?
                    </p>
                </div>

                <div className={`pt-2 ${style.conteinerReactions}`}>
                    <img className={style.pointer} src={likeLogo} /> 6 likes
                    <img src={commentLogo} />Reply
                </div>
            </div>
        </div>
    )
}

export default CardCentralBody