import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getImages, getIndex} from "../../redux/selectors";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import {modalActions} from "../../redux/reduces";

const ImageViewer = () => {

    const imageIndex = useSelector(getIndex)
    const images = useSelector(getImages);

    const [indexShowed, setIndexShowed] = useState(imageIndex)

    const onNext = () => {
        return setIndexShowed(indexShowed + 1)
    }

    const onBefore = () => {
        return setIndexShowed(indexShowed - 1)
    }

    const dispatch = useDispatch();

    const onClose = () => {
            dispatch(modalActions.closeModal());
    };

    return (
        <div className='images_view_wrapper'>
            <button
                className='close-btn'
                onClick={onClose}
            >
                <CloseIcon />
            </button>
            <button
                className='navigation_before'
                onClick={onBefore}
                disabled={indexShowed === 0}
            >
                <NavigateBeforeIcon/>
            </button>
            <img className={'image_in_modal'} src={images[indexShowed]} alt=""/>
            <button
                className='navigation_next'
                onClick={onNext}
                disabled={indexShowed === images.length - 1}
            >
                <NavigateNextIcon/>
            </button>
        </div>
    );
};

export default ImageViewer;
