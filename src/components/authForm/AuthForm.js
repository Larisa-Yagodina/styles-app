import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {modalActions} from "../../redux/reduces";

const AuthForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const AUTH_PASSWORD = 'magic';
    const dispatch = useDispatch();

    const onChange = (e) => {
      setInputValue(e.target.value)
        if (AUTH_PASSWORD === e.target.value) {
            setErrorMessage('')
            setError(false)
        } else {
            setErrorMessage('Wrong password')
            setError(true)
        }
    }

    const onSubmit = () => {
        if (AUTH_PASSWORD === inputValue) {
            dispatch(modalActions.setAuth());
            localStorage.setItem('isAuth', JSON.stringify(true));
            setErrorMessage('')
            setError(false)
        }
    }

    return (
        <Box
            component="form"
            sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
        >

            <div className='auth_form'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Your password, please.
                </Typography>
                <br/>
                <TextField
                    error={error}
                    id="outlined-error-helper-text"
                    label="Passphrase"
                    defaultValue=""
                    helperText={errorMessage}
                    value={inputValue}
                    onChange={(e) => onChange(e)}
                />
                <br/>
                <br/>

                <Button
                    disabled={AUTH_PASSWORD !== inputValue}
                    variant="text"
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </div>
        </Box>
    );
};

export default AuthForm;
