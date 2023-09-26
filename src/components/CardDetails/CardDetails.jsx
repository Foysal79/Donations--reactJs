import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = ({ card }) => {
  const { textColor, id, picture, description, price, title } = card || {};

  const ids = parseInt(id);


  const handelAddToDonate =() => {
    const addDonationIsArray = [];
    const donation = JSON.parse(localStorage.getItem("donation"));

    if(!donation){
      addDonationIsArray.push(card);
      localStorage.setItem("donation", JSON.stringify(addDonationIsArray));
      toast.success("success fully add your donation !");
    }
    else{
      const isExist = donation.find((card) => card.id === ids);
      if(!isExist)
      {
        addDonationIsArray.push(...donation, card);
        localStorage.setItem("donation", JSON.stringify(addDonationIsArray));
        toast.success("success fully add your donation !");
      }
      else{
        toast.error("Error no duplicate !");
      }
    }

  }

  return (
    <div className="pt-24 w-[1300px] mx-auto">
      <div >
      
        <div className="relative">
          <img className="w-[1320px] h-[700px]" src={picture} />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-80">
            <button onClick={handelAddToDonate}
              style={{ backgroundColor: textColor, color: "#FFFF" }}
              className="btn">
              Donate ${price}
            </button>
          </div>
        </div>
     
      <div className="card-body pt-12">
        <h2 className="card-title text-5xl font-700 ">
           {title}
        </h2>
        <p className="pt-6 text-base ">
            {description}
        </p>

      </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default CardDetails;
