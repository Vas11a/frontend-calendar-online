import github from '../imgs/github.png';

const Footer:React.FC = () =>  {
  return (
    <footer className='footerHome'>
        <a href='https://github.com/Vas11a' target='_blank' className="githubImg"/>
        <a href='https://github.com/Vas11a' className="githubImg">
          <img src={github} alt="github" className=' w-12 h-auto' />  
        </a> 
    </footer>
  );
};

export default Footer;