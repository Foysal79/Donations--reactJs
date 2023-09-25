import React from 'react';
import Banner from '../../Hader/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';



const Home = () => {
    const cards = useLoaderData();
    
    return (
        <div className='w-full mb-48'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[1300px] mx-auto gap-6'>
               {
                cards.map(card => <Card key={card.id} card={card} ></Card>)
               }
            </div>
        </div>
    );
};

export default Home;