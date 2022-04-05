import React, { useEffect, useState } from 'react';
import Phones from '../Phones/Phones';

const About = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    console.log(phones);

    return (

        <div>
            {
                phones.map(phone => <Phones key={phone.sell} phone={phone}></Phones>)
            }

        </div>

    );
};

export default About;