import React from 'react';
import axios from 'axios';
import loader from '../../imgs/loader.gif';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addMainMessage, addMessage } from '../../redux/slices/currentRoomSlice';
import { setMessage } from '../../redux/slices/currentRoomSlice';
import {webUrl} from '../../urls';

type PropsType = {
    data: string;
    message: string;
}

const ButtonsDayPannel:React.FC<PropsType> = ({data, message}) => {
    const {currentName} = useAppSelector((state) => state.currentRoom);
    const {name} = useAppSelector((state) => state.registred);

    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const dispatch = useAppDispatch();

    //send message as main
    const sendAsMain = async () => {
        setIsLoading(true);
        const res = await axios.post(`${webUrl}sendMain`, {data, message, roomName: currentName});
        if (res.data === 'error') {
            setIsError(true);
            setIsLoading(false);
            return;
        };
        setIsLoading(false);
        dispatch(addMainMessage([message, data]));
        dispatch(setMessage(''));
    };

    //send message as common
    const sendAsMessage = async () => {
        setIsLoading(true);
        const res = await axios.post(`${webUrl}sendMessage`, {data, message, roomName: currentName, name});
        if (res.data === 'error') {
            setIsError(true);
            setIsLoading(false);
            return;
        };
        setIsLoading(false);
        dispatch(addMessage([{name, message}, data]));
        dispatch(setMessage(''));
    };
    return (
        <>
        {isError && <div className=' font-bold px-2 text-lg text-center text-red-600'>Error</div>}
        {isLoading &&  <img src={loader} alt="loading" className=' w-14 h-14 m-auto my-2' />}
        <div className="buttonsDayPannel pt-4 flex justify-between">
            <button onClick={sendAsMessage} className=' px-2 py-1 duration-500 bg-gray-400 hover:bg-white border border-black text-lg rounded-md'>Send</button>
            <button onClick={sendAsMain}className='px-2 py-1 border duration-500 bg-gray-400 hover:bg-white border-black text-lg rounded-md'>Send as main</button>
        </div>
        </>
    );
}

export default ButtonsDayPannel;