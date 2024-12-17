import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from "../../redux/reduces";
import {getIsAuth, getIsOpenModal, getModalType} from "../../redux/selectors";
import AuthForm from "../../components/authForm/AuthForm";
import ImageViewer from "../../components/stylePage/ImageViewer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid lightgrey',
    borderRadius: '7px',
    boxShadow: 24,
    p: 4,
};

export const MODAL_TYPES = {
    "IMAGES": 'IMAGES',
    "AUTH": 'AUTH'
}

const MODAL_COMPONENTS = {
    [MODAL_TYPES.AUTH]: AuthForm,
    [MODAL_TYPES.IMAGES]: ImageViewer,
};

export default function ModalWindow() {

    const open = useSelector(getIsOpenModal);
    const type = useSelector(getModalType)
    console.log('TYPE: ' + type)

    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    const handleClose = () => {
        if (isAuth) {
            dispatch(modalActions.closeModal());
        }
    };

    const renderComponent = () => {
        const Component = MODAL_COMPONENTS[type]
        return !type || !Component ? null : <Component />
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {renderComponent()}
                </Box>


            </Modal>
        </div>
    );
}
