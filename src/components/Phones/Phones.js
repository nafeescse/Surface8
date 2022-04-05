import React from 'react';

const Phones = (props) => {
    const { img2 } = props.phone;

    return (
    <div className='flex flex-col items-center p-3'>
        <img className='w-1/2 border m-4 p-1 mr-4 rounded-lg ' src={img2} alt="" />
    </div>
    );
};

export default Phones;