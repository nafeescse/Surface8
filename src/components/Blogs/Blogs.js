import React from 'react';

const Blogs = () => {
    return (
        <div className='h-screen'>
            <p className='text-center mt-16 text-3xl font-bold'>Question Answer (2)</p>
            <div className='grid grid-cols-1 md:grid-cols-2 flex items-center justify-center'>
            <div className='border-0 bg-blue-100 rounded-xl my-10  mx-10 p-5 shadow-xl shadow-blue-500'>
                <p className='font-bold py-2'>Q-1: What is context API ?</p>
                <p> The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-0 bg-blue-100 rounded-xl  mx-10 p-5 shadow-xl shadow-blue-500'>
                <p className='font-bold py-2'>Q-2: What is context API ?</p>
                <p> Semantic HTML tags are those that clearly describe their meaning in a human and machine-readable way. Elements such as 'header', 'footer' and 'article' are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. The semantic elements added in HTML5 are: <span className='font-bold'>'article', 'aside', 'details', 'figure', 'header', 'footer', 'section', 'main', 'time', 'nav' etc.</span>
                </p>
            </div>
            </div>

        </div>
    );
};

export default Blogs;