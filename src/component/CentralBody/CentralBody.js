import style from "./CentralBody.module.scss"
import profilePicture from "./img/profile.webp"
import commentLogo from "./img/comment.png"
import likeLogo from "./img/like.png"

const CentralBody = () => {
return(
        <main id="main-container" class="cotainer col-xs-12 m-0 col-md-6 offset-md-2 col-xl-6 main bg-white">

            <hr/>

            <h2 className="pt-5">Discussion(11)</h2>

            <div className="autor d-flex mx-4 pt-5">

                <div>
                    <img src={profilePicture} className={style.avatarEntryTwo}/>
                </div>

                <div className="mx-4 autorProperties">
                    <form action="">
                        <textarea rows="rows" name="name" className={style.textArea}>Add to the disscussion</textarea>
                    </form>
                </div>

            </div>



            <div className="autor d-flex mx-4 pt-5">

                <div>
                    <img src={profilePicture} className={style.avatarEntryTwo}/>
                </div>

                <div className="mx-4 autorProperties">

                    <div className={style.commentBox}>
                        <p className="pt-3"> raddevus <span className="text-secondary"> Jun 15</span></p>

                        <p className="pt-3">
                                I think Twitter graph would look similar, except the dip would be even more drastic on the weekends.
                        </p>

                        <p>The reason that is interesting is because :</p>

                        <h2>My Theory</h2>
                            
                        <p>If people aren't at work they don't waste time on Twitter.</p>

                        <h2>Main Point</h2>

                        <p>Twitter is really just people wasting time -- but they aren't wasting valuable time, instead they are
                                just wasting work time.
                        </p>

                    </div>

                    <div>
                        <img src={likeLogo}/> 6 likes

                        <img src={commentLogo}/>Reply
                    </div>

                </div>

            </div>


            <div class="autor d-flex mx-4 pt-5">
                <div>
                    <img src={profilePicture} className={style.avatarEntryTwo}/>
                </div>

                <div className="mx-4 autorProperties">
                    <div className={style.commentBox}>

                        <p class="pt-3"> Manuer Artero Anguita <span className="text-secondary"> Jun 16 - Edited on Jun 16</span></p>
                                
                        <p className="pt-3">
                                    Maybe we can try a different reading?

                                    Maybe the "standard" fall for any technology approach git numbers (80-90%) ... while CSS is the one that
                                    highlights (falling just 40-50%)? maybe because side-projects trend to need cool shadow-boxes ?
                        </p>
                    </div>

                    <div>
                        <img src={likeLogo}/> 6 likes
                        <img src={commentLogo}/>Reply
                    </div>
                </div>
            </div>


            <div class="autor d-flex mx-4 pt-5">

                <div>
                    <img src={profilePicture} className={style.avatarEntryTwo}/>
                </div>

                <div className="mx-4 autorProperties">
                    <div className={style.commentBox}>

                        <p className="pt-3"> drsensor <span className="text-secondary"> Jun 15</span></p>

                        <p className="pt-3">
                                        I think they delegate their git problems and workflow to vscode (with or without extension). Think like
                                        solving merge conflict and staging hunk of code can be figure out by just right clicking. It even has
                                        notification when something goes wrong. The only thing that essential but can't be grasped by exploring
                                        the UI alone is how to gpg sign the commit.
                        </p>
                    </div>

                    <div>
                        <img src={likeLogo}/> 6 likes
                        <img src={commentLogo}/>Reply
                    </div>
                </div>
            </div>


            <div className="mt-5">
                <h1>Read next</h1>
            </div>

        </main>

    );
};

export default CentralBody