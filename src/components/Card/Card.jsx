
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ card }) => {

  const {
    id,
    category,
    picture,
    title,
    categoryBgColor,
    cardBgColor,
    textColor,
    description,
    price } = card || {};

    
  return (
    
    <Link to={`/card/${id}`}>
    <div style={{backgroundColor:cardBgColor}} className="card   shadow-xl ">
      <figure>
        <img className="image-container"
          src={picture}
          alt="coming soon...."
        />
      </figure>
      <div className="card-body">
        <div className='mb-8'>
        
          <button style={{color:textColor, backgroundColor:categoryBgColor}} className={`btn px-6`}>{category}</button>
        </div>

        <h3 className="font-semibold text-xl">{title}</h3>
        
      </div>
    </div>
    </Link>
  );
};

export default Card;
