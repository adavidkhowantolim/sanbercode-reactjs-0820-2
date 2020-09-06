import React from 'react';
import "./tugas10.css";

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class DataHeader extends React.Component {
  render(){
    return <th className="th">{this.props.header.charAt(0).toUpperCase() + this.props.header.slice(1)}</th>;
  }
}

class DataNama extends React.Component {
  render(){
    return <td className="td">{this.props.nama} </td>;
  }
}

class DataHarga extends React.Component {
  render(){
    return <td className="td">{this.props.harga} </td>;
  }
}

class DataBerat extends React.Component {
  render(){
    return <td className="td">{this.props.berat/1000} kg</td>;
  }
}

class Judul extends React.Component {
  render(){
    return <h1>Tabel Harga Buah</h1>;
  }
}

class Tugas10 extends React.Component {
  render() {
    return (
      <div>
        <h1>Tabel Harga Buah</h1>
        <table className="table">
          <tr>
            {
              Object.keys(dataHargaBuah[0]).map(el=>{
                return <DataHeader header={el}/>
              })
            }
          </tr>
          {dataHargaBuah.map(el=> {
            return (
                  <tr>
                    <DataNama nama = {el.nama}/> 
                    <DataHarga harga = {el.harga}/> 
                    <DataBerat berat = {el.berat}/>
                  </tr>
            )
          })}
        </table>
      </div>
    );
  }
}

export default Tugas10;