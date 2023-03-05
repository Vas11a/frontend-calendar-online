import React from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../../redux/slices/registredSlice';

export default function ChangeAv({thema}) {
    const [name, setName] = React.useState('');

    const dispatch = useDispatch();

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const [animation, setAnimation] = React.useState(false);

    const sendName = () => {
        dispatch(changeName(name));
        setName('');
    };
    
    return (
        <div className={`account flex flex-col justify-center text-center bg-gray-300 py-2 rounded-md px-2 duration-500 ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>Change name</div>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                placeholder='enter name' 
                value={name}
                className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} />
            <button 
                onClick={sendName}
                className='border-2 border-gray-500 py-1 px-2 font-medium rounded-xl'>Ok</button>
        </div>
    );
};
