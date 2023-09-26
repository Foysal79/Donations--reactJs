import React, { useEffect, useState } from "react";
import DynamicPieChart from "./DynamicPieChart ";


const Statistics = () => {
  const [donations, setDonations] = useState(0);
  const [total, setTotal] = useState(0);
 
  useEffect(() => {
             fetch('/data.json')
             .then(res => res.json())
             .then(data => setTotal(data.reduce((pre, carr) => pre + carr.price, 0)))
 
  },[])
 
    

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("donation"));
    if(donation)
    {
        const total = donation.reduce((pre, carr) => pre + carr.price, 0)
        setDonations(total);
    }
  }, []);
   
       
  

  const data = [
    { name: 'my donation', value: donations },
    { name: 'total donation', value: total }
  ];
     



  return (
    
      <div >
        <DynamicPieChart data={data} />
    </div>
    
  );
};

export default Statistics;
