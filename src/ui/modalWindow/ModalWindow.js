import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from "../../redux/reduces";
import {getIsAuth, getIsOpenModal} from "../../redux/selectors";
import AuthForm from "../../components/authForm/AuthForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalWindow() {

    const open = useSelector(getIsOpenModal);
    const isAuth = useSelector(getIsAuth);

    const dispatch = useDispatch();


    const handleClose = () => {
        if (isAuth) {
            dispatch(modalActions.closeModal());
        }
    };

    // <Button onClick={handleOpen}>Open modal</Button>
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    {/*<Typography id="modal-modal-description" sx={{ mt: 2 }}>*/}
                    {/*    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
                    {/*</Typography>*/}
                    <AuthForm />
                </Box>


            </Modal>
        </div>
    );
}
