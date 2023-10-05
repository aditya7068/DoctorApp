import React from 'react';
import Sdata2 from '../Data/Sdata2';
import Card3 from '../Card/Card3';

const Comp4 = ()=>{
     return(
        <>
        <section className='header'>
        <div className='p-4'>
            <h3 className='text-center heading'>Our <span> Doctors</span></h3>
        </div>
            <section className='icon-container'> 
               <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                        {
                        Sdata2.map((val,ind)=>{
                           return <Card3
                              key={ind}
                              img={val.img}
                              name={val.name}
                              title={val.title}
                              f={val.f}
                              t={val.t}
                              i={val.i}
                              l={val.l}
                           />
                         })
                      }
                        </div>
                      
                      </div>
                   </div>
               </div>
            </section>
            </section>
            <hr />
        </>
     )
}

export default Comp4;