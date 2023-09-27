import React, { useState } from 'react';
import Banner from '../../Hader/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';




const Home = () => {
    const cards = useLoaderData();

   
    const [display, setDisplay] = useState(cards);


    const handelDataRechive = (data) => {
           
           if(data === 'Health' || data === "health")
           {
            const heath = cards.filter(filterData => filterData.category === "Health");
            setDisplay(heath);
           }
           else if(data === "Education" || data === "education")
           {
            const Education = cards.filter(filterData => filterData.category === "Education");
            setDisplay(Education);
           }
           else if(data === "Clothing" || data === "clothing")
           {
            const Clothing = cards.filter(filterData => filterData.category === "Clothing");
            setDisplay(Clothing);
           }
           else if(data === "Food" || data === "food")
           {
            const food = cards.filter(filterData => filterData.category === "Food");
            setDisplay(food);
           }
           
           
    } 

    
    
    return (
        <div className='w-full mb-48'>
            
            <Banner onDataSent={handelDataRechive}></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:w-[1300px] lg:mx-auto gap-6'>
               {
                display.map(card => <Card key={card.id} card={card} ></Card>)
               }
            </div>
        </div>
    );
};

export default Home;