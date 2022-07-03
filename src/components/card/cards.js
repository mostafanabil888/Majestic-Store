import React from "react";
import './cards.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faHeart,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
/*start flex card section */
export default function Cards() {
  return (
    <section className="flex-cards">
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4">
                <div className="card">
                     <img src="\assets\img\gallery\shoes-blog-1.png" alt="shoes" />
                     <div className="card-contant">
                     <p><span>Kelly Hudson</span> . Fashion actiKelly Hudson .</p>
                     <h3>How important are...</h3>
                     <p>Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders that we meet every day...</p>
                     <NavLink className='link' to='/'>read more</NavLink>
                     <div className="img-details d-flex">
                     <img src="assets/img/gallery/author-1.png" width="60" alt="fashion-model"/>
                     <div className="d-flex">
                        <div className="icons-box ">
                            <FontAwesomeIcon icon={faEye} />
                            <span>35</span>
                        </div>
                        <div className="icons-box">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>23</span>
                        </div>
                        <div className="icons-box">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span>14</span>
                        </div>
                     </div>
                     </div>
                     </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card">
                     <img src="\assets\img\gallery\fashion-blog-2.png" alt="fashion" />
                     <div className="card-contant">
                     <p><span>Kelly Hudson</span> . Fashion actiKelly Hudson .</p>
                     <h3>How important are...</h3>
                     <p>Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders that we meet every day...</p>
                     <NavLink className='link' to='/'>read more</NavLink>
                     <div className="img-details d-flex">
                     <img src="assets/img/gallery/author-2.png" width="60" alt="fashion-model"/>
                     <div className="d-flex">
                        <div className="icons-box ">
                            <FontAwesomeIcon icon={faEye} />
                            <span>35</span>
                        </div>
                        <div className="icons-box">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>23</span>
                        </div>
                        <div className="icons-box">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span>14</span>
                        </div>
                     </div>
                     </div>
                     </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card">
                     <img src="\assets\img\gallery\spring-dress-blog-3.png" alt="spring-dress" />
                     <div className="card-contant">
                     <p><span>Kelly Hudson</span> . Fashion actiKelly Hudson .</p>
                     <h3>How important are...</h3>
                     <p>Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders that we meet every day...</p>
                     <NavLink className='link' to='/'>read more</NavLink>
                     <div className="img-details d-flex">
                     <img src="assets/img/gallery/author-3.png" width="60" alt="fashion-model"/>
                     <div className="d-flex">
                        <div className="icons-box ">
                            <FontAwesomeIcon icon={faEye} />
                            <span>35</span>
                        </div>
                        <div className="icons-box">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>23</span>
                        </div>
                        <div className="icons-box">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span>14</span>
                        </div>
                     </div>
                     </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
/*end flex card section */
