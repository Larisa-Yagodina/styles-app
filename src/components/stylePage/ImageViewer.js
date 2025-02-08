import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getImages, getIndex} from "../../redux/selectors";
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
                <CloseIcon/>
            </button>
            <div
                className={indexShowed !== 0 ? 'navigation before' : 'navigation_before disabled'}
                onClick={onBefore}
            >
                {
                    indexShowed !== 0 &&
                    <div>
                        {'<'}
                    </div>
                }

            </div>
            <img className={'image_in_modal'} src={images[indexShowed]} alt=""/>
            <div
                className={indexShowed !== images.length - 1 ? 'navigation next' : 'navigation_next disabled'}
                onClick={onNext}
            > {
                indexShowed !== images.length - 1 &&
                <div>
                    {'>'}
                </div>
            }
            </div>
        </div>
    );
};

export default ImageViewer;
