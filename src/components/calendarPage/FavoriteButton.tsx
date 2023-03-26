import React from 'react';

const FavoriteButton: React.FC = () => {
    return (
        <div className=' w-full flex justify-center'>
            <button type='button' className=' border-2 bg-slate-400 rounded-lg font-bold mt-4 border-black py-1 px-4'>
                Favorite
            </button>
        </div>
    )
}

export default FavoriteButton;