import React from 'react';
import Day from './Day';
import { DayArrTypes } from '../../types';


const DaysList:React.FC<DayArrTypes> = ({days}) => {
    return (
        <div className="daysList  ">
            {
                days && days.map((elem, idx) => 
                    <Day idx={idx} dayData={elem} key={elem.data+idx}/>
                )
            }
        </div>
    );
};

export default DaysList;