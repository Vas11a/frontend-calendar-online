import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Settings from '../components/homePage/Settings';
import Pluse from '../components/homePage/Pluse';
import Rooms from '../components/homePage/Rooms';
import {useSelector} from 'react-redux';


export default function HomePage() {
  const {thema} = useSelector((state) => state.sett);
  
  return (
    <div className={`wrapper duration-500 ${thema !== 'white' && 'bg-gray-600'}`}>
      <Header/>
      <main className='mainHome '>
        <Rooms />
        <Pluse/>
        <Settings thema={thema}/>
      </main>
      <Footer/>
    </div>
  );
};
