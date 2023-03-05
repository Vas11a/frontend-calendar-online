import React from 'react';
import Day from './Day';

export default function DaysList({days}) {
    return (
        <div className="daysList  ">
            {
                days && days.map((elem, idx) => 
                    <Day idx={idx} dayData={elem} key={elem+idx}/>
                )
            }
        </div>
    );
};
