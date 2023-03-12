import React from 'react';
import avatar from '../imgs/avatar1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseChangeAvPanel } from '../redux/slices/settingsSlice';



export default function Header({ chatName }) {
  const {name} = useSelector((state) => state.registred);
  const dispatch = useDispatch();
  return (
    <header className='headerHome'>
      <div className="chatName">
        {chatName}
      </div>
      <div className="account">
        <div className="name cursor-pointer" onClick={() => dispatch(openCloseChangeAvPanel())}>
          {name}
        </div>
        <div className="avatarImg ">
          <img src={avatar} alt="avaImg" className=' rounded-full' />
        </div>
      </div>
    </header>
  );
};
