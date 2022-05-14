import pic from './airbnb 1.png';
export default function NavBar(){
    return(
        <nav>
            <img src={pic} className="nav--logo"></img>
        </nav>
    );
}