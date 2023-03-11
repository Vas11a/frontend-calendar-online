import React from 'react';
import github from '../imgs/github.png';

export default function Footer() {
  return (
    <footer className='footerHome'>
        <a href='https://github.com/Vas11a' target='_blank' className="githubImg">
          <img src={github} alt="github" className=' w-12 h-auto' />  
        </a> 
    </footer>
  );
};
