//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
//import Background from './components/Background';

import {
    BrowserRouter as Router,
    Route,
    Routes
    
  } from "react-router-dom";

export default class App extends Component {
  apiKey="0432226e8e2e4713a8b0c72692968746"

state={
progress:0

}

setProgress = (progress)=>{

  this.setState({progress:progress})
}

render(){


return(

// {/* <div style={{ 
//       backgroundImage: `url("https://img.freepik.com/free-vector/technology-background-with-earth-circuit-diagram_1017-19385.jpg?w=900&t=st=1720812945~exp=1720813545~hmac=e69c4c3f07dfd4a2fd17776218ecfbdb741ee7c9b771f79ab6e446560c237895")` 
//     }}> */}
<div>
<Router basename='/NewsReader'>
<Navbar/>

<LoadingBar
height={4}
        color='#f11946'
        progress={this.state.progress}
        
      />

<Routes>
          <Route exact path="/"  element={<News setProgress ={this.setProgress } apiKey={this.apiKey} key="general" pageSize={9} country="in" category='general' />}/>
          <Route exact path="/business" element={<News setProgress ={this.setProgress } apiKey={this.apiKey}  key="business" pageSize={9} country="in" category='business'/>}/>
          <Route exact path="/entertainment" element={<News setProgress ={this.setProgress } apiKey={this.apiKey}  key="entertainment" pageSize={9} country="in" category='entertainment'/>}/>
          <Route exact path="/health" element={<News setProgress ={this.setProgress }  apiKey={this.apiKey} key="health" pageSize={9} country="in" category='health'/>}/>
          <Route exact path="/science" element={<News setProgress ={this.setProgress } apiKey={this.apiKey}  key="science" pageSize={9} country="in" category='science'/>}/>
          <Route exact path="/sports" element={<News setProgress ={this.setProgress }  apiKey={this.apiKey} key="sports" pageSize={9} country="in" category='sports'/>}/>
          <Route exact path="/technology" element={<News setProgress ={this.setProgress }  apiKey={this.apiKey} key="technology" pageSize={9} country="in" category='technology'/>}/>
        </Routes>
</Router>
</div>


)
}
}