import React, { useState } from 'react';
import { set_user_name } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogUser = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const submit = (e) => {
        e.preventDefault();
        dispatch(
            set_user_name(userName)
        )
        navigate("/Pokedex")
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