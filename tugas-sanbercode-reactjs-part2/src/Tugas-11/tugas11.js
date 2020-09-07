import React, {Component} from 'react';
import './tugas11.css';

class Tugas11 extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 150,
      date: new Date(),
      show: true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 ,
      date: new Date()
    });
    if (this.state.time <= 0){
      this.setState({
        show: false
      });
      this.componentWillUnmount();
    }
    console.log(this.state.time)
  }

  render(){
    return(
      <>
        { this.state.show && (
          <>
            <h1 className='left'>
              sekarang jam : {this.state.date.toLocaleTimeString()}
            </h1>
            <h1 className='right'>
              hitung mundur: {this.state.time}
            </h1>
          </>
        )}
      </>
    )
  }
}

export default Tugas11