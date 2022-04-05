import React from 'react';

const Cards = (props) => {
    const {img, name, ratings, position, review} = props.review;
    return (
        <div className='bg-blue-100 shadow-2xl border- border-blue-600 m-4 p-3 rounded-lg'>
            <div className='flex items-center m-2'>
                <img className='mr-2 w-16 rounded-full ' src={img} alt="" />
                <div>
                <p className='font-bold'>{name}</p>
                <p>{position}</p>
                <p>Ratings: {ratings}</p>
                
                </div>
            </div>
            <p className='mt-2 text-justify'>{review}</p>
        </div>
    );
};

export default Cards;