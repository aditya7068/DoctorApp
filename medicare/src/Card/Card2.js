import React from 'react';
import { Link } from 'react-router-dom';

const Card2 = (props)=>{
    return(
       <>
                 <div className='icons col-sm-6 col-md-4 col-lg-4'>
                   <div class="box">
                      {props.icon}
                      <h3>{props.title}</h3>
                      <p>{props.para}</p>
                      <Link to="/" class="btn">Learn More <span class="fas fa-chevron-right"></span></Link>
                   </div>
                 </div> 
       </>
    )
}

export default Card2;