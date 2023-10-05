import React from 'react';
import Comp1 from '../Component/Comp1';
import Comp2 from '../Component/Comp2';
import web from '../Image/dr1.png';

const Home = ()=>{
     return(
        <>
            <Comp1
                heading='Stay Safe,Stay Healthy'
                para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, error!'
                img={web}
            />
            <Comp2/>
        </>
     )
}

export default Home;