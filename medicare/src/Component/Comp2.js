import React from 'react';
import Sdata from '../Data/Sdata';
import Card1 from '../Card/Card1';

const Comp2 = ()=>{
     return(
        <>
            <section className='icons-container'> 
               <div className='container-fluid mb-5'>
                  <div className='row'>
                      <div className='col-10 mx-auto'>
                      
                      <div className='row gy-4'>
                      {
                        Sdata.map((val,ind)=>{
                           return <Card1
                              key={ind}
                              icon={val.icon}
                              no={val.no}
                              title={val.title}
                           />
                         })
                      }
                      </div>
                      
                      </div>
                   </div>
               </div>
            </section>
        </>
     )
}

export default Comp2;