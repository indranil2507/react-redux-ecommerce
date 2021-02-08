import React from 'react';
import HeroComponent from './pages/HeroComponent'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Shoppingpage from './pages/Shoppingpage';


class App extends React.Component{
  
render(){
  return(
    <>
    <Router>
    <Route path="/" exact component={HeroComponent}/>
    <Route path="/buynow" exact component={Shoppingpage}/>
   
    </Router>
  
    </>
  )
}
}

export default App;
