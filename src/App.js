import logo from './logo.svg';
import './App.css';

function App() {

  const fetchGrandExchangeData = async ()=>{
    const url = "https://prices.runescape.wiki/api/v1/osrs/mapping";
    const response = await fetch(url, {mode: "cors"});
    const data = await response.json();
    console.log(data[0]);
  };

  fetchGrandExchangeData();

  return (
    <div className="App">

    </div>
  );
}

export default App;
