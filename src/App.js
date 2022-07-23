import './App.css';
import GeItems from './GeItems';
import useFilterGeItems from './component/usefilterGeItems';
import useLoadGeItems from './component/useLoadGeItems';
import useLoadGePrices from './component/useLoadGePrices';
import Navbar from './component/Navbar';


// for(let i = 0; i < 121; i+=12){
//   splitByTwelve.push(numbers.slice(i, numbers[i+10-1] ? i+10 : numbers.length -1])); <-- for seperating into pages with twelve items each
// }
function App() {

  const {items} = useLoadGeItems([]);
  const {prices} = useLoadGePrices([]);
  const {filteredItems, filterItemsByName} = useFilterGeItems(items);

  return (
    <div className="App">
      <Navbar filterItemsByName={filterItemsByName}/>
      <GeItems items={filteredItems} prices={prices}/>
    </div>
  );
}

export default App;
