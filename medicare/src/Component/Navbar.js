import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ()=>{
     return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 mx-auto'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand ps-5" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
  <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475Z"/>
  <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z"/>
</svg> MyDoctor </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 pe-5 mb-lg-0">
        <li className="nav-item">
          <Link activeClassName="menu-active" exact className="nav-link active px-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="menu-active" className="nav-link px-2" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="menu-active" className="nav-link px-2" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="menu-active" className="nav-link px-2" to="/doctors">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="menu-active" className="nav-link px-2" to="/list">List</Link>
        </li>
        {/* <li className="nav-item">
          <Link activeClassName="menu-active" className="nav-link px-2" to="/review">Review</Link>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>

               </div>
            </div>
        </div>
        </>
     )
}

export default Navbar;