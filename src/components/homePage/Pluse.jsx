import React from 'react';
import pluse from '../../imgs/pluse.png';
import { useDispatch } from 'react-redux';
import { openCloseCreatePanel } from '../../redux/slices/settingsSlice';


export default function Pluse() {
    const dispatch = useDispatch();

    const openCloseCP = () => {
        dispatch(openCloseCreatePanel());
    };
    
    return (
        <div className="plusCont" onClick={openCloseCP}>
            <img src={pluse} alt="Add room" className='plus' />
        </div>
    );
};
