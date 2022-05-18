import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import './Component/styles.css';
function App() {
  return (
    <div className="App">
     <NavBar/>
     {/* <Hero/> */}
     <Card
     img="image 12.png"
     Rating="5.0"
     reviewCount={6}
     country="USA"
     title="Life Lessons with Katie Zaferes"
     price="From $136"/>
    </div>
  );
}

export default App;
