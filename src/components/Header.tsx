import React from 'react';
import avatar from '../imgs/avatar1.jpg';
import { openCloseChangeAvPanel } from '../redux/slices/settingsSlice';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

type PropsType = {
  chatName: string;
};


const Header:React.FC<PropsType> = ({ chatName }) =>  {
  const { name } = useAppSelector((state) => state.registred);
  const dispatch = useAppDispatch();
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

export default Header;