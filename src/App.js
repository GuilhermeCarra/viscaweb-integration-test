import RankingWidget from './components/RankingWidget/RankingWidget'
import items from './utils/items'
import './App.scss';


function App() {
  return (
    <div className="App">
      <RankingWidget
        items={items}
      />
    </div>
  );
}

export default App;
