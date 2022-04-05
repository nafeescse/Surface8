import React from 'react';
import notfound from '../../notfound.png';
import {   ReplyIcon } from '@heroicons/react/solid'

const NotFound = () => {
    return (
        <div>
            <div  className='m-12 flex justify-center'>
            <img src={notfound} alt="" />
            </div>
            
            <div className='flex justify-center'>
                <a href="/" className='border-2 border-blue-700 rounded-xl p-2 hover:bg-blue-400 hover:text-white shadow-xl m-12 flex' >Back to Home 
                <ReplyIcon className='w-6 ml-2'></ReplyIcon>
                </a>
            </div>
        </div>
    );
};

export default NotFound;