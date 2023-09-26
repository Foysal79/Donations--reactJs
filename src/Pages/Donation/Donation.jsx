import React, { useEffect, useState } from 'react';
import CardDonation from './CardDonation';




const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [noFound, setNoFound] = useState(false);

    useEffect(()=>{
    const donation = JSON.parse(localStorage.getItem("donation"));  
        if(donation)
        {
            setDonations(donation);
        }
        else{
            setNoFound('NO Data Found');
        }
    }, [])
      
    return (
        <div>
            {
            noFound ? ( <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> ) : ""
            }
            <div className="grid grid-cols-2 gap-4 px-36 py-28">
                {
                    isShow ? donations.map((donations)=> ( <CardDonation key={donations.id} donation={donations} ></CardDonation>) ) 
                    :
                    donations.slice(0,4).map((donations) =>( <CardDonation key={donations.id} donation={donations}></CardDonation>))
                }
            </div>
            {
                donations.length > 4 && <button onClick={()=> setIsShow(!isShow)} className='px-5 py-4 rounded-lg bg-black text-white block mx-auto'>
                    {isShow? "See Less" : "See All"}
                </button>
            }
        </div>
    );
};

export default Donation;