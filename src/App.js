import './App.css';
import Searchbar from './Searchbar';
import GeItems from './GeItems';
import useGeItems from './useGeItems';
import useLoadGeItems from './component/useLoadGeItems';

function App() {

 //const {items, fetchItems} = useGeItems([]);
  const {items, fetchItems} = useLoadGeItems([]);

  return (
    <div className="App">
      {/* <Searchbar fetchItems={fetchItems}/>
      <GeItems items={items}/> */}
    </div>
  );
}

export default App;
