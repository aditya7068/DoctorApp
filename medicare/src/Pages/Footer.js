import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ()=>{
     return(
        <>
            <section className='footer'>
              <div className='container-fluid'>
                  <div className='row'>
                     <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-sm-6 col-md-3 col-lg-3 box'>
                               
                                <h3>quick links</h3>
                                    <Link to="/"> <i class="fas fa-chevron-right"></i> home </Link>
                                    <Link to="/service"> <i class="fas fa-chevron-right"></i> services </Link>
                                    <Link to="/about"> <i class="fas fa-chevron-right"></i> about </Link>
                                    <Link to="/doctors"> <i class="fas fa-chevron-right"></i> doctors </Link>
                                    <Link to="/books"> <i class="fas fa-chevron-right"></i> book </Link>
                                    <Link to="/review"> <i class="fas fa-chevron-right"></i> review </Link>
                                </div>
                            <div className='col-sm-6 col-md-3 col-lg-3 box'>
                               
                                    <h3>our services</h3>
                                    <Link to="#"> <i class="fas fa-chevron-right"></i> dental care </Link>
                                    <Link to="#"> <i class="fas fa-chevron-right"></i> message therapy </Link>
                                    <Link to="#"> <i class="fas fa-chevron-right"></i> cardioloty </Link>
                                    <Link to="#"> <i class="fas fa-chevron-right"></i> diagnosis </Link>
                                    <Link to="#"> <i class="fas fa-chevron-right"></i> ambulance service </Link>
                                
                            </div>
                            <div className='col-sm-6 col-md-3 col-lg-3 box'>
                            <h3>contact info</h3>
                                    <Link to="#"> <i class="fas fa-phone"></i> +123-456-7890 </Link>
                                    <Link to="#"> <i class="fas fa-phone"></i> +111-222-3333 </Link>
                                    <Link to="#"> <i class="fas fa-envelope"></i> xyz@gmail.com </Link>
                                    <Link to="#"> <i class="fas fa-envelope"></i> pqy@gmail.com </Link>
                                    <Link to="#"> <i class="fas fa-map-marker-alt"></i>mumbai, india </Link>
                            </div>
                            <div className='col-sm-6 col-md-3 col-lg-3 box'>
                            <h3>follow us</h3>
                                    <Link to="#"> <i class="fab fa-facebook-f"></i> facebook </Link>
                                    <Link to="#"> <i class="fab fa-twitter"></i> twitter </Link>
                                    <Link to="#"> <i class="fab fa-twitter"></i> twitter </Link>
                                    <Link to="#"> <i class="fab fa-instagram"></i> instagram </Link>
                                    <Link to="#"> <i class="fab fa-linkedin"></i> linkedin </Link>
                                    <Link to="#"> <i class="fab fa-pinterest"></i> pinterest </Link>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="credit"> Created by <span>Mr. Web Developer</span> | All Rights Reserved @2023</div>
            </section>
        </>
     )
}

export default Blogs;