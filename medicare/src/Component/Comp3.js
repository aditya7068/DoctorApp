import React from 'react';
import Sdata1 from '../Data/Sdata1';
import Card2 from '../Card/Card2';

const Comp3 = ()=>{
     return(
        <>
        <section className='header'>
        <div className='p-4'>
            <h3 className='text-center heading'>Our <span> Services</span></h3>
        </div>
            <section className='icon-container'> 
               <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                        {
                        Sdata1.map((val,ind)=>{
                           return <Card2
                              key={ind}
                              icon={val.icon}
                              para={val.para}
                              title={val.title}
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

export default Comp3;