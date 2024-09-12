import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBS from './ReactBS';
import Dismissed from './Dismissed';
import ImagesDemo from './ImagesDemo';
import CardsBS from './CardsBS';
import MyNav from './MyNav';
import MyCarousel from './MyCarousel';
import GridBS from './GridBS';
import CardExample from './CardExample';



function App() {
  let myNumber = 128;
  console.log(Math.random());
  return (
    <div className="App">
      
      {/* <ReactBS/> */}
      {/* <Dismissed/> */}
      {/* <ImagesDemo/> */}
      {/* <CardsBS/> */}
      {/* <MyNav/> */}
      <MyCarousel/>
      {/* <GridBS/> */}
      {/* <CardExample/> */}
    </div>
  );
}

export default App;
