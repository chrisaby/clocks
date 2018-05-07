import React, { Component } from 'react';
import moment from 'moment'
import logo from './logo.svg';
import './App.css';
class App extends Component
{
  constructor(props){
    super(props);
    this.state={date: new Date()};
    this.tick = this.tick.bind(this);
  }
  componentDidMount(){
    // this.timer = setInterval(()=>this.tick(),1000);
    this.timer = setInterval(this.tick,1000);
    
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  tick(){
    // console.log("hi",this);
    this.setState({date: new Date()})
  }
  render()
  {
    return (
      <div className="App">
            {moment().format('LTS')}<br/>The Time is <br/><span>{this.state.date.toLocaleTimeString()}</span>           
      </div>
    );
  }
}

export default App;
