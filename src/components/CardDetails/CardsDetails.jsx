import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";


const CardsDetails = ({inputValue}) => {
    console.log(inputValue);
    const {id} = useParams();
    const  [card, setCard] = useState([]);
    const cards = useLoaderData();


    const ids = parseInt(id);

    useEffect(() => {
        const findCard = cards.find((card) => (card.id === ids));
        
        setCard(findCard);
    },[ids, cards]);

    
     
    return (
        <div>
            <CardDetails card={card}></CardDetails>
        </div>
    );
};

export default CardsDetails;