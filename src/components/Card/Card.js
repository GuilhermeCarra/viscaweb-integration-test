import { ChevronRight, StarFill, Star} from 'react-bootstrap-icons';
import './Card.scss';

function Card({item, cardView, alphaSort}) {
    const {id, rank, logo, rating, exclusive, offer, offerDetailed, value, page} = item;
    return (
        <div
            className={`item ${cardView ? "card" : ""}`}
            onClick={()=> window.open(page)}
        >
            <div className={`rank ${alphaSort ? "hide" : ""}`}>{rank}</div>
            <div>
                <a
                    href={`/review/${id}`}
                    onClick={(e)=>e.stopPropagation()}
                >
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="rating">
                {rating >= 1 ? <StarFill size={11}/> : <Star size={11}/>}
                {rating >= 2 ? <StarFill size={11}/> : <Star size={11}/>}
                {rating >= 3 ? <StarFill size={11}/> : <Star size={11}/>}
                {rating >= 4 ? <StarFill size={11}/> : <Star size={11}/>}
                {rating >= 5 ? <StarFill size={11}/> : <Star size={11}/>}
            </div>
            <div className="review-link">
                <a
                    href={`/review/${id}`}
                    onClick={(e)=>e.stopPropagation()}
                >
                    Review
                </a>
            </div>
            <div className="offer-mobile">
                <div>{offer}</div>
                <div>{value}</div>
            </div>
            <div className="offer-desktop">
                {exclusive && <div className="exclusive-tag">- Exclusive -</div>}
                <div>{offerDetailed}</div>
            </div>
            <div className="play-btn small">
                <ChevronRight/>
            </div>
            <div className="play-btn big">
                <span>Play Now</span>
                <ChevronRight/>
            </div>
        </div>
  );
}

export default Card;
