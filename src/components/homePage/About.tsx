import React from 'react';
import loader from '../../imgs/loader.gif';
import axios from 'axios';
import { changeName } from '../../redux/slices/registredSlice';
import { webUrl } from '../../urls';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


const PasswordPanel:React.FC<{thema: string}> = ({ thema }) => {
    const {name} = useAppSelector((state) => state.registred);

    React.useEffect(() => {
        setAnimation(true);
    }, []);


    const [animation, setAnimation] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useAppDispatch();

    const removeUser = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post(`${webUrl}removeUser`, {name});
            if (res.data === 'error') {
                alert('Connection error');
                setIsLoading(false);
                return;
            };
            dispatch(changeName('Guest'));
            setIsLoading(false);
        } catch (error) {
            alert('Connection error');
            setIsLoading(false);
            return;
        };
    };

    
    return (
        <div className={`account flex flex-col justify-center text-center  py-2 rounded-md px-2 duration-500 ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <h1 className='text-2xl font-bold'>{name}</h1>
            {
                isLoading && <img src={loader} alt="loading..." className=' m-auto w-10 h-auto my-1' />
            }
            
            {
                name !== 'Guest' && <button onClick={removeUser} className=' text-red-600 py-1 px-2 border-black border-2 font-bold rounded-2xl text-sm'>Remove Acc</button>
            }
            
        </div>
    );
};

export default PasswordPanel;