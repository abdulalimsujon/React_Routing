import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import { blogsData } from '../Data'

const Blog = () => {
    // const [bodyDatas, setBodydatas] = useState(blogsData)

    const { title } = useParams();


    const { state } = useLocation();

    // const body = blogsData.filter((bodydata) => bodydata.title === title)
    return (
        <div>
            <h1> {title}</h1>

            {
                <p>{state.body}</p>

            }


        </div>



    );
};

export default Blog;