import React from 'react';
import logo from './logo.svg';
import './App.css';
const data = [
  { name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" },
  { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" },
  { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" },
  { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
]

class ImageData extends React.Component {
  render() {
    return <img src={this.props.photo}/>;
  }
}
class NameData extends React.Component {
  render() {
    if (!this.props.gender === ("Female")){
      return <p>Mr {this.props.name}</p>
    } else {
      return <p>Mrs {this.props.name}</p>
    }
  }
}
class ProfessionData extends React.Component {
  render() {
    return <p>{this.props.profession}</p>
  }
}
class AgeData extends React.Component{
  render() {
    return <p>{this.props.age} years old</p>
  }
}
function App() {
  return (
    <div className="App">
      {data.map(el=> {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <ImageData photo={el.photo}/> 
              <NameData name={el.name}/> 
              <ProfessionData profession={el.profession}/>
              <AgeData age={el.age}/>
            </div>
          )
        })}
    </div>
  );
}

export default App;
