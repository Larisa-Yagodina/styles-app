import './App.css';
import AppLayout from "./components/appLayout/AppLayout";
import ModalWindow from "./ui/modalWindow/ModalWindow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {modalActions} from "./redux/reduces";

function App() {

    const dispatch = useDispatch();
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))

    useEffect(() => {
        if (!isAuth) {
            dispatch(modalActions.openAuthModal())
        } else {
            dispatch(modalActions.setAuth())
        }
    }, [])

    return (
            <div>
                <AppLayout/>
                <ModalWindow />
            </div>
    );
}

export default App;
