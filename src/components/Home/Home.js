import React from 'react';
import pro8 from '../../surface.png'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import useReviews from '../../hooks/useReviews';
import Cards from '../Cards/Cards';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = reviews.slice(0, 3);
    return (
        <div>
            <section className='grid grid-cols-1 lg:grid-cols-[65%,35%] p-10'>
                <div className='p-10'>
                    <h2 className='text-5xl font-bold'>Microsoft Surface pro 8</h2>
                    <p className='py-8 text-justify'>The Microsoft Surface Pro 8 is the latest in the company’s line of 2-in-1 Surface Pro tablets. This iteration includes an 11th generation Intel CPU, a 13-inch 120Hz display, two Thunderbolt 4 ports and a removable SSD. Just as important, it comes with Windows 11 right out of the box and is suited to the new operating system. Its small size and lightweight design make the Surface Pro 8 ideal to use at home or on the road. During my testing for this review, I found the device outstanding for everyday use. I also loved how well the touch-friendly Windows 11 operating system works with the tablet. The front-facing and rear cameras are also fantastic, providing clean detailed images. Unfortunately, the Surface Pro 8 disappoints as a gaming device and doesn't live up to the promised 16 hours of battery life.</p>
                    <a className='flex justify-center lg:justify-start' href="https://www.techadvisor.com/review/microsoft-surface-pro-8-3814502/" >
                        <button className='border-2 bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center'>See More
                            <ArrowCircleRightIcon className='w-8 ml-2'></ArrowCircleRightIcon>
                        </button>
                    </a>
                </div>
                <div className='flex justify-center'>
                    <img className='hover:translate-x-10 ease-in-out' src={pro8} alt="" />
                </div>
            </section>
            <section className='flex flex-col items-center pb-10'>
                <h1 className='text-3xl font-bold'>Customers Review ({homeReviews.length})</h1>
                <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 m-5 p-5'>
                    {
                        homeReviews.map(review => <Cards key={review.sell} review={review}></Cards>)
                    }
                </div>
                <a className='flex justify-center lg:justify-start' href="/reviews" >
                        <button className='border-2 bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center'>See All Reviews
                            <ArrowCircleRightIcon className='w-8 ml-2'></ArrowCircleRightIcon>
                        </button>
                    </a>
            </section>

        </div>
    );
};

export default Home;