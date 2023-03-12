import React from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setRoomName, setPassword, addNewRoom } from '../../redux/slices/roomsSlice';
import { webUrl } from '../../urls';



const CreateRoom:React.FC<{thema: string}> = ({thema}) => {
    const {roomName, password, roomsArr} = useAppSelector((state) => state.rooms)

    const [animation, setAnimation] = React.useState(false)
    const [nameErr, setNameErr] = React.useState(false)

    React.useEffect(() => {
        setAnimation(true)
    }, [])

    const dispatch = useAppDispatch();

    // function to create game
    const createRoom = async () => {
        try {
            for (let i = 0; i < roomsArr.length; i++) {
                if (roomsArr[i].name.replace(/ /g, '') === roomName.replace(/ /g, '') ) {
                    setNameErr(true);
                    return;
                };
            };
            await axios.post(`${webUrl}createRoom`, {password, roomName});
            dispatch(addNewRoom());
            dispatch(setRoomName(''));
            dispatch(setPassword(''));
            setNameErr(false);
        } catch (error) {
            console.log(error);
            alert('Something was wrong');
        };
    };
    
    return (
        <div className={`account flex flex-col justify-center text-center  py-2 rounded-md px-2 duration-500 ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>Create room</div>
            
                {nameErr && <div className=' font-bold -my-2 text-red-600 text-sm'>Enter unique name</div>}
            
            <input 
                type="text" 
                placeholder='enter room name'
                value={roomName} 
                onChange={(e) => dispatch(setRoomName(e.target.value))}
                className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} 
            />
            <input 
                type="text" 
                placeholder='enter password' 
                value={password}
                onChange = {(e) => dispatch(setPassword(e.target.value))}
                className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`}  
            />
            <button
                onClick={createRoom} 
                className='border-2 border-gray-500 py-1 px-2 font-medium rounded-xl'>
            Create</button>
        </div>
    );
};

export default CreateRoom;