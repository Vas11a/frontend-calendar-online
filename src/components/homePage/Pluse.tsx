import React from 'react';
import pluse from '../../imgs/pluse.png';
import { useAppDispatch } from '../../redux/hooks';
import { openCloseCreatePanel } from '../../redux/slices/settingsSlice';


const Pluse:React.FC = () => {
    const dispatch = useAppDispatch();

    const openCloseCP = () => {
        dispatch(openCloseCreatePanel());
    };
    
    return (
        <div className="plusCont" onClick={openCloseCP}>
            <img src={pluse} alt="Add room" className='plus' />
        </div>
    );
};

export default Pluse;