import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../Data'

const Blog = () => {
    // const [bodyDatas, setBodydatas] = useState(blogsData)

    const { title } = useParams();

    const body = blogsData.filter((bodydata) => bodydata.title === title)
    return (
        <div>
            <h1> {title}</h1>

            {
                <p>{body[0].body}</p>

            }


        </div>



    );
};

export default Blog;