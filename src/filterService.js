import { useState } from "react";
import classes from "./filterService.module.css";
const FilterService = () => {
  const [images, setImage] = useState([]);
  const [view, setView] = useState();
 
  const fileSelectedHandler = (e) => {
    let file = {id:" ",file:e.target.files[0]}
    setImage([e.target.files[0],...images]);
    setView(e.target.files[0]);
  };
  const deleteImage =(ima)=>{

    let filteredImages = images;
    

    filteredImages = filteredImages.filter(images=>{
        return images.name !== ima.name;
    })

    setImage(filteredImages);
    setView(filteredImages[0]);
  }
  const submithandler = () => {
    console.log(images);
  };

  const displayImage=(images)=>{
    
    setView(images);

  }
  return (
    <div>
      <form>
        <h3>Images</h3>
        <input type="file" multiple onChange={fileSelectedHandler} />
      </form>
     
    {view && <div className={classes["main-div"]}>
    <div>
        <img className={classes["image-div"]} src={URL.createObjectURL(view)} alt="" />
    </div>
    
    <div>
        <div className={classes["row"]}>
        {images.map((images) => {
            return (
            <div className={classes["column"]}>
                <img
                className={classes["demo-img"]}
                style={{ height: "99px", width: "99px" }}
                src={URL.createObjectURL(images)}
                key={"image uniqueid"}
                alt=""
                onClick={()=>displayImage(images)}
                />
            <button className={classes["close-btn"]} onClick={()=>deleteImage(images)}>x</button>
            </div>
            );
        })}
        </div>
    </div>
    </div>}
    <button onClick={submithandler}>upload</button>
    </div>
  );
};
export default FilterService;
