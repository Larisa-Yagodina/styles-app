import React from 'react';
import {useSelector} from "react-redux";
import {getImages, getIndex} from "../../redux/selectors";


const ImageViewer = () => {

    const imageIndex = useSelector(getIndex)
    const images = useSelector(getImages);

    return (
        <div>
            <img className={'image_in_modal'} src={images[imageIndex]} alt=""/>
        </div>
    );
};

export default ImageViewer;
