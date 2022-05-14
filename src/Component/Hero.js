import pic from './Group 77.png';
export default function Hero(){
    return(
    <div className="hero">
        <img src={pic} className="Collections"></img>
        <h1 className="Hero--h1">Online Experiences</h1>
        <p className="Hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </div>
    );
}