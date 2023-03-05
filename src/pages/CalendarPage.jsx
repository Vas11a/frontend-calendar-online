import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DaysList from '../components/calendarPage/DaysList';
import DayPannel from '../components/calendarPage/DayPannel';
import OtherSettingsPanel from '../components/calendarPage/OtherSettingsPanel';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function CalendarPage() {
  const {thema} = useSelector((state) => state.sett);

  const {isRoomEntered, currentRoom} = useSelector((state) => state.currentRoom);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isRoomEntered === false) {
      navigate('/');
    };
  }, []);

  return (
    <div className={`wrapper duration-500 ${thema !== 'white' && 'bg-gray-600'}`}>
      <Header chatName={currentRoom.name} />
      <main>
        <DaysList days={currentRoom.days}/>
        <div className="controolPanel ">
          <DayPannel thema={thema}/>
          <OtherSettingsPanel thema={thema} />
        </div>


      </main>
      <Footer />
    </div>
  );
};
