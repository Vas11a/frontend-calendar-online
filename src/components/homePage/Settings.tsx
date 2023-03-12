import React from 'react';
import Thema from '../Thema';
import ChangeAv from './ChangeAv';
import CreateRoom from './CreateRoom';
import PasswordPanel from './PasswordPanel'
import { useAppSelector } from '../../redux/hooks';

const Settings:React.FC<{thema: string}> = ({thema}) => {
    
    const {isOpenPasPanel, isOpenCreatePanel, isOpenChangeAvPanel} = useAppSelector((state) => state.sett);
    
    return (
        <div className="settings">
            <div className='font-bold text-xl'>
                Settings
            </div>
            <div className="pannelRoom flex flex-col justify-between p-1 overflow-hidden">
                <div className="settingsVarPanel">
                    {
                        isOpenCreatePanel && <CreateRoom thema={thema}/>
                    }
                
                    {
                        isOpenChangeAvPanel && <ChangeAv thema={thema}/> 
                    }
                    {
                        isOpenPasPanel && <PasswordPanel thema={thema}/>
                    }
                    
                </div>
                <div className="settingsDefPanel border-t-2 border-black">
                   <Thema/>
                </div>
            </div>
        </div>
    );
};

export default Settings;