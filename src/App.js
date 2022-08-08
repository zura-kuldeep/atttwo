import React from 'react';
import FilterService from "./filterService.js"

import { OpenCvProvider, useOpenCv } from 'opencv-react';
import { useState, useEffect } from 'react';

import one from './filterService';



import img from './img/1.jpg';
import imgTemp from "./img/opinion_essay_4.jpg"

function MyComponent() {
  const [saved, setSaved] = useState(true);
  const [image, setImage] = useState();
  const [mini, setMini] = useState(false);
  const [uploaded, setUploaded] = useState();

  const data = useOpenCv();

  useEffect(() => {

  }, [uploaded]);

  const imageSaver = () => {
    let saved = document.getElementById("outputsrc").toDataURL();
    setImage(saved);
    setSaved(false);
    one();

  }
  
  const imageBlur = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);
    let anchor = new cv.Point(-1, -1);
    cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());

  }
  const gaussianBlur = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);

    cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());
  }

  const MedianBlur = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.medianBlur(src, dst, 5);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());
  }

  const BilateralFilter = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
    // You can try more different parameters
    cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());

  }

  const StructuringElement = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
    let dst = new cv.Mat();
    let M = new cv.Mat();
    let ksize = new cv.Size(5, 5);
    // You can try more different parameters
    M = cv.getStructuringElement(cv.MORPH_CROSS, ksize);
    cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete(); M.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());

  }

  const Erosion = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.erode(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete(); M.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());
  }

  const Dilation = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete(); M.delete();


    setUploaded(document.getElementById("outputsrc").toDataURL());

  }

  const opening = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, 1,
      cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete(); M.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());
  }

  const closing = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    // You can try more different parameters
    cv.morphologyEx(src, dst, cv.MORPH_CLOSE, M);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete(); M.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());

  }

  const MorphologicalGradient = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    // You can try more different parameters
    cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete(); M.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());
  }

  const EdgeDetect = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
    // You can try more different parameters
    cv.Canny(src, dst, 50, 100, 3, false);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());
  }

  const PyrDown = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.pyrDown(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();

    setUploaded(document.getElementById("outputsrc").toDataURL());

  }
  const PyrUp = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.pyrUp(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();
  }

  const matching = () => {
    setMini(true);
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let templ = cv.imread('miniImg');
    let dst = new cv.Mat();
    let mask = new cv.Mat();
    cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
    let result = cv.minMaxLoc(dst, mask);
    let maxPoint = result.maxLoc;
    let color = new cv.Scalar(255, 0, 0, 255);
    let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
    cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
    cv.imshow('outputsrc', src);
    src.delete(); dst.delete(); mask.delete();

  }

  const detectFace = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    let faces = new cv.RectVector();
    let eyes = new cv.RectVector();
    let faceCascade = new cv.CascadeClassifier();
    let eyeCascade = new cv.CascadeClassifier();
    // load pre-trained classifiers

    faceCascade.load('haarcascade_frontalface_default.xml');
    eyeCascade.load('haarcascade_eye.xml');
    // detect faces
    let msize = new cv.Size(0, 0);
    faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, msize, msize);
    for (let i = 0; i < faces.size(); ++i) {
      let roiGray = gray.roi(faces.get(i));
      let roiSrc = src.roi(faces.get(i));
      let point1 = new cv.Point(faces.get(i).x, faces.get(i).y);
      let point2 = new cv.Point(faces.get(i).x + faces.get(i).width,
        faces.get(i).y + faces.get(i).height);
      cv.rectangle(src, point1, point2, [255, 0, 0, 255]);
      // detect eyes in face ROI
      eyeCascade.detectMultiScale(roiGray, eyes);
      for (let j = 0; j < eyes.size(); ++j) {
        let point1 = new cv.Point(eyes.get(j).x, eyes.get(j).y);
        let point2 = new cv.Point(eyes.get(j).x + eyes.get(j).width,
          eyes.get(j).y + eyes.get(j).height);
        cv.rectangle(roiSrc, point1, point2, [0, 0, 255, 255]);
      }
      roiGray.delete(); roiSrc.delete();
    }
    cv.imshow('outputsrc', src);
    src.delete(); gray.delete(); faceCascade.delete();
    eyeCascade.delete(); faces.delete(); eyes.delete();
  }
  const imageUploaded = (e) => {

    let src = URL.createObjectURL(e.target.files[0]);

    setUploaded(src);

  }
  const deblur = () => {
    one();
  }
  const zoomIn = () => {

    var myImg = document.getElementById("outputsrc");
    var currWidth = myImg.clientWidth;
    if (currWidth == 2500) return false;
    else {
      myImg.style.width = (currWidth + 100) + "px";
    }

  }
  const zoomOut = () => {
    var myImg = document.getElementById("outputsrc");
    var currWidth = myImg.clientWidth;
    if (currWidth == 100) return false;
    else {
      myImg.style.width = (currWidth - 100) + "px";
    }

  }

  const greyFilter = () => {
    let cv = window.cv;
    let src = cv.imread('imagesrc');
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow('outputsrc', dst);
    src.delete(); dst.delete();
  }
  // const rotate = (x) => {
  //   switch (x){
  //     case "0":{document.getElementById("outputsrc").style.transform = "rotate(0deg)";}
  //     break;
  //     case "90":{document.getElementById("outputsrc").style.transform = "rotate(0deg)";}
  //      break;
  //     case "180":{document.getElementById("outputsrc").style.transform = "rotate(0deg)";}
  //      break;
  //     case "360":{document.getElementById("outputsrc").style.transform = "rotate(0deg)"; }
  //     break;
  //     default:break;
  //   }
  // }
  return <>{saved &&
    <div>
      <input type='file' accept="image/*" onChange={imageUploaded} />
      <div style={{ display: "flex" }}>
        <img id="imagesrc" src={uploaded} style={{ display: "none" }} />

        <div style={{
          padding: "16px",
          marginTop: "30px",
          width: "100%",
          height: "100vh",
          overflow: "auto",
          cursor: "grab",
          cursor: "-o-grab",
          cursor: "-moz-grab",
          cursor: "-webkit-grab",
        }}>
          <canvas id="outputsrc"></canvas>
        </div>


        <div style={{ display: "inline", marginTop: "50px" }}>
          <div style={{ marginLeft: "10px" }}>
            <p>Zoom</p>
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>


          </div>
          <div style={{ marginLeft: "10px" }}>
            <p>Rotate</p>
            {/* <button onClick={rotate("0")}>0</button>
            <button onClick={rotate("90")}>90</button>
            <button onClick={rotate('180')}>180</button>
            <button onClick={rotate("360")}>360</button> */}
          </div>

          <div style={{ marginLeft: "10px" }}>
            <p>Color Filter</p>
            <button onClick={greyFilter}>Grey</button>
          </div>

          <div style={{ marginLeft: "10px" }}>

            <p>Smoothing Filters</p>
            <button onClick={imageBlur}>Averaging</button>
            <button onClick={gaussianBlur}>Gaussian Blur</button>
            <button onClick={MedianBlur}>Median Blur</button>
            <button onClick={BilateralFilter}> Bilateral Filter </button>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p>Morphological Transformations(image shape)</p>
            <button onClick={Erosion}>Erosion</button>
            <button onClick={Dilation}>Dilation</button>
            <button onClick={opening}>opening</button>
            <button onClick={closing}>closing</button>
            <button onClick={MorphologicalGradient}> Morphological Gradient</button>
            <button onClick={StructuringElement}>Structuring Element</button>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p>Canny Edge Detection</p>
            <button onClick={EdgeDetect}>Detect</button>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p>Image Pyramids</p>
            <button onClick={PyrDown}>PyrDown</button>
            <button onClick={PyrUp}>PyrUp</button>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <p>Template Matching Test</p>
            <button onClick={matching}>Check</button>
          </div>
          {/* 
          <div>
            <p>Object Detection</p>
            <button onClick={detectFace}>Face</button>
          </div> */}

          <div style={{ marginLeft: "10px" }}>
            <p>Noise reduction</p>
            <button onClick={deblur}>Deblur</button>
          </div>



        </div>

      </div>
      {mini && <img id="miniImg" src={imgTemp} style={{ marginTop: "10px", MarginLeft: "5px" }} />}
      <button onClick={imageSaver} style={{ margin: "20px", width: "100px" }}>save</button></div>}
    {!saved && <img src={image} style={{ marginTop: "10px" }} />}</>

}

const App = () => {
  const [Image, setImage] = useState();
  const onLoaded = (cv) => {

    console.log('opencv loaded, cv');

    let imgtag = document.getElementById("imagesrc");
    let src = cv.imread(imgtag);
    // let dst = new cv.Mat();
    // cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow('outputsrc', src);
    src.delete();
    // dst.delete();

  }


  return (
    
    <OpenCvProvider onLoad={onLoaded} openCvPath='/opencv/opencv.js'>
      <MyComponent />

    </OpenCvProvider>
  )
}

export default App
