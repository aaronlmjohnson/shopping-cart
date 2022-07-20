import './App.css';
import Searchbar from './Searchbar';
import GeItems from './GeItems';
import useFilterGeItems from './component/usefilterGeItems';
import useLoadGeItems from './component/useLoadGeItems';

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
