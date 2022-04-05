import useReviews from '../../hooks/useReviews';
import Cards from '../Cards/Cards';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold  mt-10'>Customer's Review ({reviews.length})</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 m-5 p-3'>
            {
                reviews.map(review => <Cards key={review.sell} review={review}></Cards>)
            }
            
            </div>
        </div>
    );
};

export default Reviews;