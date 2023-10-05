import React from 'react';

const Card1 = (props)=>{
    return(
       <>
           <div className='icons col-sm-6 col-md-3 col-lg-3'>
              {props.icon}
              <h3>{props.no}</h3>
              <p>{props.title}</p>
              </div>
                            
       </>
    )
}

export default Card1;