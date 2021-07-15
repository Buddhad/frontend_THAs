import './App.css'

// import Data from './Components/Data'

import Task from './Components/Task'
function App(props){
  return(
    <div className="App">
    <div className="Title">
    <header className="header">
            <h1> {props.title}</h1>

    <div className="container">
    
         {/* <Button /> */}
         {/* <Data /> */}
         <Task />
        
    </div>
    </header>
    </div>
    </div>
  )
}

App.defaultProps = {
  title: 'Calori Tracker',
}

export default App;