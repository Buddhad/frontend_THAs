import Header from './Components/Header'
import "./App.css"

import logo from "./lmao.jpg"

function App() {
  return (
    <div className='container'>
       <img src={logo} alt="meme" style={{height: '500px', width:'500px' ,border:'5px solid green', borderRadius: '20px'}}/>;
      <Header />
       <header className="App-header">
      
      </header> 
    </div>
  )
}

export default App;
