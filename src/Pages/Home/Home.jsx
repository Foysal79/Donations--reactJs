import React from 'react';
import Banner from '../../Hader/Banner';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const cards = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <div>
                
            </div>
        </div>
    );
};

export default Home;