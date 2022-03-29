import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogUser = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const selector = useSelector(state => state.isLog);
    console.log(selector)
    const submit = (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_USER_NAME",
            payload: userName,
        })
    }

    return (
        <form onSubmit={submit} className='form-user'>
            <div className='top-form-user'>
                <h1>Hello trainer!</h1>
                <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" />
            </div>
            <div>
                <p>
                    Give me your name to start
                </p>
            <input 
                type="text" 
                placeholder='name...' 
                onChange={(e) => setUserName(e.target.value)}
                />
                <button>
                    <i className='fas fa-paper-plane'></i>
                </button>
            </div>
           
        </form>
    );
};

export default LogUser;