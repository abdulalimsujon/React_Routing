import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore?</p>

            <button onClick={() => navigate('/blogs')}>Go to Blog</button>

        </div>
    );
};

export default Home;