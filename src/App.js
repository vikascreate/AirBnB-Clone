import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import './Component/styles.css';
import data from './data';
function App() {
  const mapstuff=data.map(item => {
    return <Card 
    key={item.id}
       {...item}/>
  })
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <section className="cards-list">
     {mapstuff}
     </section>
    </div>
  );
}

export default App;
