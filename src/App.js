import './App.css';
import Searchbar from './Searchbar';
import GeItems from './GeItems';
import useFilterGeItems from './component/usefilterGeItems';
import useLoadGeItems from './component/useLoadGeItems';


// for(let i = 0; i < 121; i+=12){
//   splitByTwelve.push(numbers.slice(i, numbers[i+10-1] ? i+10 : numbers.length -1]));
// }
function App() {

  const {items, fetchItems} = useLoadGeItems([]);
  const {filteredItems, filterItemsByName} = useFilterGeItems(items);

  return (
    <div className="App">
      <Searchbar filterItemsByName={filterItemsByName}/>
      <GeItems items={filteredItems}/>
    </div>
  );
}

export default App;
