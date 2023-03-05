import React from 'react';
import axios from 'axios';
import loader from '../../imgs/loader.gif';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPass, addCurrentRoom, setRoomEntered } from '../../redux/slices/currentRoomSlice';
import { webUrl } from '../../urls';


export default function PasswordPanel({ thema }) {
    const { currentPassword, currentName } = useSelector((state) => state.currentRoom);

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const navigate = useNavigate();

    const [animation, setAnimation] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [nameErr, setNameErr] = React.useState(false);

    const dispatch = useDispatch();
    
    // enter room
    const goToRoom = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post(`${webUrl}getRoom`, { currentPassword, currentName });
            if (res.data === 'error') {
                setNameErr(true);
                setIsLoading(false);
                return;
            }
            setNameErr(false);
            dispatch(addCurrentRoom(res.data));
            dispatch(setRoomEntered(true));
            setIsLoading(false);
            navigate('/calendar');
        } catch (error) {
            setNameErr(true);
            setIsLoading(false);
            return;
        };
    };

    
    return (
        <div className={`account flex flex-col justify-center text-center  py-2 rounded-md px-2 duration-500 ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>{currentName}</div>
            {nameErr && <div className=' font-bold -my-2 text-red-600 text-sm'>wrong password</div>}
            <input onChange={(e) => dispatch(setCurrentPass(e.target.value))} type="text" placeholder='password' className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} />
            <button onClick={goToRoom} className='border-2 border-gray-500 py-1 px-2 font-medium rounded-xl'>Enter</button>
            {
                isLoading && <img src={loader}  alt="loading"  className=' w-11 h-11 m-auto'/>
            }
            
        </div>
    );
};