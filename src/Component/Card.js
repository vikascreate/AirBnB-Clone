
import pic2 from './Star 1.png';
export default function Card(props){
    console.log(props)
    return(
        <card className="card">
            <img src={`images/${props.img}`} className="card--img"></img>
            <div className='card--stats'>
                <img src={pic2} className="card--star"></img>
                <span >{props.Rating}</span>
                <span className="gray">({props.reviewCount}) .  </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price} </span>/ person</p>
        </card>
    );
}