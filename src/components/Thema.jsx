import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeThema } from '../redux/slices/settingsSlice';

export default function Thema() {
    const dispatch = useDispatch();
    const {thema} = useSelector((state) => state.sett);
    return (
        <div className="changeThema pb-1 py-3 flex gap-2 justify-center">
            <div className='font-bold'>White</div>
            <div
            onClick={() => dispatch(changeThema())} 
            className='w-12 h-6 p-0.5 border-black rounded-full border-2 cursor-pointer'>
                <div className={` w-4 h-4 bg-black rounded-full mt-0.25 duration-500 ${thema !== 'white' && 'ml-6'}`}></div>
            </div>
            <div className='font-bold'>Dark</div>
        </div>
    )
}
