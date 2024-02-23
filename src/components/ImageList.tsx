import { useSelector } from "react-redux";
import { ImageType } from "../type/ImageType";
// import { StateType } from "../type/StateType";
import React from "react";
import { useAppSelector } from "../hooks/ReduxHook";


export default function ImageList() {

    const images = useAppSelector(state => state.image.images);

    return (
      <>
        {images.map(image => (
            <a key={image.id} href={image.downloadUrl}>
                <div className='img' style={{backgroundImage: `url(${image.imageUrl})`}}>  
                </div>
            </a>
        ))}
      </>
    )
}
