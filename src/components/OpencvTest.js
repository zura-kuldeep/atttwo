import {useOpenCv } from 'opencv-react';
import { useState } from 'react';

const OpencvTest=(props)=>{


    const data = useOpenCv();
    // console.log(window.cv);
    const passImage=(e)=>{        
        props.imagePassing(e.target.files[0]);
    }
    return<>
    <input type="file" accept='image/*' onChange={passImage}/>

    </>
}
export default OpencvTest;