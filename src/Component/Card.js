
import pic2 from './Star 1.png';
export default function Card(props){
    console.log(props)
    let badgeText
    if(props.openSpots===0){
        badgeText="SOLD OUT"
    }
    else if(props.location==="Online"){
        badgeText="ONLINE"
    }
    return(
        <card className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`images/${props.coverImg}`} className="card--img"></img>
            <div className='card--stats'>   
                <img src={pic2} className="card--star"></img>
                <span >{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) .  </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price} </span>/ person</p>
        </card>
    );
}