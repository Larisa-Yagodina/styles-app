import './App.css';
import AppLayout from "./components/appLayout/AppLayout";
import ModalWindow, {MODAL_TYPES} from "./ui/modalWindow/ModalWindow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {modalActions} from "./redux/reduces";

function App() {

    const dispatch = useDispatch();
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))

    useEffect(() => {

        if (!isAuth) {
            dispatch(modalActions.openModal({type: MODAL_TYPES.AUTH}))
        } else {
            dispatch(modalActions.setAuth())
        }
    }, [dispatch, isAuth])

    return (
            <div>
                <AppLayout/>
                <ModalWindow />
            </div>
    );
}

export default App;
