import React from 'react';
import { Link } from 'react-router-dom';

const Card3 = (props)=>{
    return(
       <>
                 <div className='icons col-sm-6 col-md-4 col-lg-4'>
                 <div class="box">
                    <img src={props.img} alt="..."/>
                    <h4>{props.name}</h4>
                    <p>{props.title}</p>
                    <div class="share">
                    <Link to={props.f} class="ic fab fa-facebook-f"> </Link>
                    <Link to={props.t} class="ic fab fa-twitter"> </Link>
                    <Link to={props.i} class="ic fab fa-instagram"> </Link>
                    <Link to={props.l} class="ic fab fa-linkedin"> </Link>
                </div>
                </div>
                 </div> 
       </>
    )
}

export default Card3;