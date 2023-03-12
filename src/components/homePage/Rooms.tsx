import React from 'react';
import Room from './Room';
import loader from '../../imgs/loader.gif';
import Find from './Find';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadRooms } from '../../redux/slices/roomsSlice';
import { webUrl } from '../../urls';

const Rooms:React.FC = () => {
    const dispatch = useAppDispatch();

    const { roomsArr } = useAppSelector((state) => state.rooms);

    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const getRooms = async (url: string) => {
            setIsLoading(true);
            const res = await axios.get(`${url}getRooms`);
            if (typeof res.data === 'string') {
                setIsLoading(true);
            } else {
                setIsLoading(false);
                dispatch(loadRooms(res.data));
            };
        };
        getRooms(webUrl);
    }, []);
    return (
        <div className="rooms ">
            <div className=" font-bold text-xl">Rooms</div>
            <div className="pannelRoom p-1 overflow-y-scroll">
                <Find load={setIsLoading}/>
                {
                    isLoading && <img src={loader} alt="loading" className=' w-14 h-14 m-auto mt-5 mb-2' />
                }
                {
                    roomsArr.length === 0 && <div className=' text-center text-2xl font-bold text-gray-500'>No rooms</div>
                }

                {
                    roomsArr.map((elem, idx) =>
                        <Room
                            bgIdx={idx}
                            key={elem.name + idx}
                            roomName={elem.name}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Rooms;