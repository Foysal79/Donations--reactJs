import React, { useEffect, useState } from 'react';
import CardDonation from './CardDonation';





const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [noFound, setNoFound] = useState(false);
    const [totalDonations , setTotalDonations] = useState(0);

    useEffect(()=>{
    const donation = JSON.parse(localStorage.getItem("donation"));  
        if(donation)
        {
            setDonations(donation);
            const total = donation.reduce((pre, curr) => pre + curr.price, 0)
            setTotalDonations(total);
        }
        else{
            setNoFound('NO Data Found');
        }
    }, [])
      
    return (
        <div>
            {
            noFound ? ( <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> ) : ('')
            }
            
            
                
            
            <div className="grid grid-cols-2 gap-4 px-36 py-20">
                {
                    isShow ? donations.map((donations)=> ( <CardDonation key={donations.id} donation={donations} ></CardDonation>) ) 
                    :
                    donations.slice(0,4).map((donations) =>( <CardDonation key={donations.id} donation={donations}></CardDonation>))
                }
            </div>
            {
                donations.length > 4  && (isShow? "" :(<button onClick={()=> setIsShow(!isShow)} className={`px-5 py-4 rounded-lg bg-[#009444] text-white block mx-auto   `}>
                    SEE ALL
                </button>))
            }
        </div>
    );
};

export default Donation;