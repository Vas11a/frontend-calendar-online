import React from 'react';
import axios from 'axios';
import { setRoomNameToFind } from '../../redux/slices/roomsSlice';
import {useSelector, useDispatch} from 'react-redux';
import { loadRooms } from '../../redux/slices/roomsSlice';
import {webUrl} from '../../urls';

export default function Find({load}) {
    const dispatch = useDispatch();

    const {roomNameToFind} = useSelector((state) => state.rooms);
    
    // function to find room
    const findRoom = async () => {
        load(true);
        const res = await axios.post(`${webUrl}findRoom`, {roomNameToFind});
        if (res.data === 'error') {
            load(false);
            return;
        };
        dispatch(loadRooms(res.data));
        load(false);
    };

    return (
        <div className=' w-full flex mb-4'>
            <input onChange={(e) => dispatch(setRoomNameToFind(e.target.value))} value={roomNameToFind} type="text" placeholder='Enter room name' className='findLine ' />
            <button className='findButton' onClick={findRoom}>Find</button>
        </div>
    );
};
