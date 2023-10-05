import React from 'react';
import Comp1 from '../Component/Comp1';
import web1 from '../Image/about.png';

const About = ()=>{
     return(
        <>
            <Comp1
                heading='We Take Care Of Ur Healthy Life'
                para='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, suscipit obcaecati vel repudiandae quisquam doloremque quae officia qui doloribus temporibus similique, dolore eveniet, sapiente odio placeat incidunt? Fugit fugiat nulla.'
                img={web1}
            />
            <hr />
        </>
     )
}

export default About;