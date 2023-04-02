import React from 'react';
import eye from '../../imgs/eye.png';
import loader from '../../imgs/loader.gif';
import Login from './Login';
import Register from './Register';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changePass } from '../../redux/slices/registredSlice';


const ChangeAv:React.FC<{thema: string}> = ({thema}) => {
    const [name, setName] = React.useState('');
    const [isPassword, setIsPassword ] = React.useState(true);
    const [isLoading, setIsLoading ] = React.useState(false);
    const [isLoginErr, setIsLoginErr ] = React.useState(false);
    const [isRegistredErr, setIsRegistredErr ] = React.useState(false);
    const {password} = useAppSelector((state) => state.registred);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const [animation, setAnimation] = React.useState(false);

    
    return (
        <div className={`account flex flex-col justify-center text-center bg-gray-300 py-2 rounded-md px-2 duration-500 ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>Login/Register</div>
            {
                isLoading && <img src={loader} alt="loading..." className=' m-auto w-10 h-auto' />
            }
            {
                isLoginErr && <div className=' text-red-600 font-bold text-md -my-2'>Wrong password or login</div>
            }
            {
                isRegistredErr && <div className=' text-red-600 font-bold text-md -my-2'>This login already taken</div>
            }
            
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                placeholder='enter name' 
                value={name}
                className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} />
            <div className='flex items-center relative w-full'> 
            <input 
                type={isPassword ? 'password' : 'text'}
                onChange={(e) => dispatch(changePass(e.target.value))}
                placeholder='enter password' 
                value={password}
                className={`focus:outline-0 font-bold rounded-md p-1 pr-10 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} />
            
            <img src={eye} alt="see" onClick={() => setIsPassword(!isPassword)} className=' w-6 h-6 m-1 right-1 absolute cursor-pointer' />
            </div>
            <div className=" flex justify-between w-full">
                <Login name={name} clearName={setName} error={setIsLoginErr} errorOt={setIsRegistredErr} loading={setIsLoading}/>
                <Register name={name} clearName={setName} error={setIsRegistredErr} errorOt={setIsLoginErr} loading={setIsLoading}/>
            </div>
        </div>
    );
};

export default ChangeAv;