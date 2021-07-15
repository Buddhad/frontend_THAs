import './App.css';
import Block from './Components/Block';
function App() {
  const head = "Calorie Read Only";
  return (
  <div className="title">
     <h1>{head}</h1>
    <div className="App">
      <Block />
     
    </div>
    </div>
  );
}

export default App;
