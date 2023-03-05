import React from 'react';
import Thema from '../Thema';
import OtSettButtons from './OtSettButtons';
import RemoveGroup from './RemoveGroup';
import { useSelector } from 'react-redux';

export default function OtherSettingsPanel({thema}) {

    const { isOpenRemovepannel } = useSelector((state) => state.sett);

    return (
        <div className="otherSettingsPanel overflow-hidden">
            <div className="windows h-40">
                {
                    isOpenRemovepannel && <RemoveGroup thema = {thema}/>
                }
                
            </div>
            <div className="otherSettings sm:border-t-2 sm:border-black">
                <Thema />
                <OtSettButtons/>
            </div>

        </div>
    );
};
