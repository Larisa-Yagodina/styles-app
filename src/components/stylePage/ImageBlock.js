import React from 'react';
import {useDispatch} from "react-redux";
import {modalActions} from "../../redux/reduces";
import {MODAL_TYPES} from "../../ui/modalWindow/ModalWindow";

const ImageBlock = ({block}) => {

    const dispatch = useDispatch();

    const onOpenImagesViewer = (index) => {
        dispatch(modalActions.openModal({type: MODAL_TYPES.IMAGES, images: block.content, imageIndex: index}))
    }

    return (
        <div>
            <div className='imageWrapper'>
                {block.content.map((el, index) => (
                    <div onClick={() => onOpenImagesViewer(index)}>
                        <img className='styles-pictures' src={el} alt='styles'/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageBlock;
