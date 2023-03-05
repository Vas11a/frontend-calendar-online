import React from 'react';
import ButtonsDayPannel from './ButtonsDayPannel';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from '../../redux/slices/currentRoomSlice';



export default function DayPannel({ thema }) {
  const {currendDay, message} = useSelector((state) => state.currentRoom);

  const dispatch = useDispatch();

  return (
    <div className={`dayPanel ${thema === 'white' ? 'bg-gray-300' : 'bg-gray-400'}`}>
      {JSON.stringify(currendDay) !== '{}' ? <> <div className=' font-bold text-center pt-1 text-2xl'>{currendDay.data}</div>
      <div className=' font-bold text-xl py-2'>Main Info:
        <span className=' font-normal break-words'> {currendDay.messages.main !== undefined ? currendDay.messages.main : 'No main events'}</span>
      </div>

      {
        currendDay.messages.otherMess !== undefined && currendDay.messages.otherMess.map((elem, idx) => 
        <div key = {elem.name +idx} className=' font-bold text-lg'>{elem.name}:
          <span className=' font-normal'> {elem.message}</span>
        </div>
        ) 
      }
      

      <textarea value={message} onChange={(e) => dispatch(setMessage(e.target.value))} placeholder='enter note' className={` w-full h-24 resize-none mt-2 rounded-xl p-2 focus:outline-0 ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`}></textarea>
      <ButtonsDayPannel data={currendDay.data} message={message} /> </> : <> <div className=' text-3xl text-center pt-9 font-bold text-gray-600'>Choose Day</div></>}
    </div>
  );
};
