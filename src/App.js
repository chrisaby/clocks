import React, { Component } from 'react';
import moment from 'moment'
import logo from './logo.svg';
import './App.css';
class App extends Component
{
  constructor(props){
    super(props);
    this.state={date: new Date(),flag:"GREEN"};
    this.tick = this.tick.bind(this);
    this.changeFlag=this.changeFlag.bind(this);
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
  changeFlag(e,flag){
    // this.setState({flag:flag});
  }
  render()
  {

    return (
      <div className="App" onClick={(e) => this.changeFlag(e,"RED")}>
            {moment().format('LTS')}<br/><p>The Time is</p> <br/>
            <span>{this.state.date.toLocaleTimeString()}</span>           
      </div>
    );
  }
}

export default App;
