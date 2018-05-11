import React, { Component } from 'react';
import moment from 'moment'
import logo from './logo.svg';
import './App.css';
class App extends Component
{
  constructor(props){
    super(props);
    this.state={date: moment().format('LTS'),flag:"LIGHTGREEN"};
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
    this.setState({date: moment().format('LTS')})
  }
  changeFlag(e,flag){
    this.setState({flag:this.getRandomColor()});
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render()
  {

    return (
      <div className="App"  onClick={this.changeFlag}>
            <span style={{backgroundColor:this.state.flag}}>{this.state.date}</span>           
      </div>
    );
  }
}

export default App;
