import React from 'react';
import { Link } from 'react-router-dom';


const Comp1 = (props)=>{
     return(
        <>
            <section className='headers'>
               <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-12 mx-auto'>
                      <div className='row'>                    

                          <div className='head col-md-6 pt-5 pt-lg-0 col-sm-12 col-lg-6'>
                          <h1>{props.heading}</h1>
                          <p>{props.para}</p>
                          <Link to="/books" className="btn">Book Now <span class="fas fa-chevron-right"></span></Link>
                          </div>
                          <div className='col-md-6 pt-5 pt-lg-0 col-sm-12 col-lg-6'>
                              <img className='img-fluid animated' src={props.img} alt="#" />
                          </div>
                          </div>
                </div>
            </div>
        </div>
            </section>
        </>
     )
}

export default Comp1;