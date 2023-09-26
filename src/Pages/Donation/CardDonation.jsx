

const CardDonation = ({ donation }) => {
  const {id, category,title,picture,categoryBgColor,cardBgColor, textColor,price} = donation || {};
  console.log(donation);
  return (
    <div style={{backgroundColor: cardBgColor }} className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <button style={{color:textColor, backgroundColor:categoryBgColor}} className="btn w-2/6 border-2 text-sm">{category}</button>
        <h2 className="card-title font-semibold">{title}</h2>
        <p className="font-semibold" style={{color:textColor}}>${price}</p>
        <div className="card-actions font-semibold">
          <button style={{backgroundColor:textColor}} className="btn w-4/6 text-white ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CardDonation;
