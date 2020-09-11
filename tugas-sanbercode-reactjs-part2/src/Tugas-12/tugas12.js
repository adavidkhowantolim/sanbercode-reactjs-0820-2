import React, {Component} from 'react';
import './tugas12.css';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class Tugas12 extends Component{

  constructor(props){
    super(props)
    this.state = {
      namaBuah : dataHargaBuah.map(({nama})=>nama), 
      hargaBuah : dataHargaBuah.map(({harga})=>harga),
      beratBuah : dataHargaBuah.map(({berat})=>berat),
      inputNamaBuah : "",
      inputHargaBuah : "",
      inputBeratBuah : "",
      editStatus: false,
      editingIndex: 0
    }

    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  // Untuk memunculkan form editing
  openEditForm = (event) => {
    let idx = event.target.value;
    this.setState({
      inputNamaBuah : this.state.namaBuah[idx],
      inputHargaBuah : this.state.hargaBuah[idx],
      inputBeratBuah : this.state.beratBuah[idx],
      editStatus: true,
      editingIndex: idx
    })
  }

  // Untuk menghilangkan form editing
  closeEditForm = () => {
    this.setState({
      inputNamaBuah : "",
      inputHargaBuah : "",
      inputBeratBuah : "",
      editStatus: false,
      editingIndex: 0
    })
  }

  // onChange input nama buah
  handleEditChangeNama = (event) => {
    var value= event.target.value;
    this.setState({inputNamaBuah: value});
  }
  
  // onChange input harga buah
  handleEditChangeHarga = (event) => {
    var value= event.target.value;
    this.setState({inputHargaBuah: value});
  }

  // onChange input berat buah
  handleEditChangeBerat = (event) => {
    var value= event.target.value;
    this.setState({inputBeratBuah: value});
  }

  // ketika button submit form ditekan
  handleEditSubmit(event){
    event.preventDefault();
    var idx = this.state.editingIndex;
    let newNamaBuah = this.state.namaBuah;
    let newHargaBuah = this.state.hargaBuah;
    let newBeratBuah = this.state.beratBuah;
    newNamaBuah.splice(idx, 1, this.state.inputNamaBuah);
    newHargaBuah.splice(idx, 1, this.state.inputHargaBuah);
    newBeratBuah.splice(idx, 1, this.state.inputBeratBuah);
    this.setState({
      namaBuah: newNamaBuah,
      hargaBuah: newHargaBuah,
      beratBuah: newBeratBuah,
      inputNamaBuah: "",
      inputHargaBuah: "",
      inputBeratBuah: "",
      editStatus: false,
      editingIndex: 0
    });
  }

  // ketika button delete ditekan
  handleDeleteSubmit(event){
    var idx = event.target.value;
    let newNamaBuah = this.state.namaBuah;
    let newHargaBuah = this.state.hargaBuah;
    let newBeratBuah = this.state.beratBuah;
    newNamaBuah.splice(idx, 1);
    newHargaBuah.splice(idx, 1);
    newBeratBuah.splice(idx, 1);
    this.setState({
      namaBuah: newNamaBuah,
      hargaBuah: newHargaBuah,
      beratBuah: newBeratBuah,
      editStatus: false,
      editingIndex: 0
    });
  }

  // render component
  render(){
    return(
      <div style={{width: "70vw", margin: "0 auto"}}>
        {/* Table */}
        <h1>Tabel Harga Buah</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Nama</th>
              <th className="th">Harga</th>
              <th className="th">Berat</th>
              <th className="th">Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.namaBuah.map((val, index)=>{
                  return(                    
                    <tr key={index}>
                      <td className="td">{val}</td>
                      <td className="td">{this.state.hargaBuah[index]}</td>
                      <td className="td">{this.state.beratBuah[index]/1000} kg</td>
                      <td className="kolom_aksi">
                        <button value={index} onClick={this.handleDeleteSubmit}>Delete</button>
                        {
                          this.state.editStatus ?
                            <button value={index} onClick={this.closeEditForm}>Close Editing Form</button>
                          : <button value={index} onClick={this.openEditForm}>Open Editing Form</button>
                        }
                      </td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
        {/* Form editing */}
        { this.state.editStatus && (
          <form className="form_edit" onSubmit={this.handleEditSubmit} id="editForm">
            <table>
              <tr>
                <label className="label">Masukkan nama buah yang ingin diubah:  </label>
                <input type="text" value={this.state.inputNamaBuah} onChange={this.handleEditChangeNama}></input>
              </tr>
              <tr>
                <label className="label">Masukkan harga buah yang ingin diubah: </label>
                <input type="text" value={this.state.inputHargaBuah} onChange={this.handleEditChangeHarga}></input>
              </tr>
              <tr>
                <label className="label">Masukkan berat buah yang ingin diubah: </label>
                <input type="text" value={this.state.inputBeratBuah} onChange={this.handleEditChangeBerat}></input>
              </tr>
              <tr>
                <input type="submit"></input>
              </tr>            
            </table>
          </form>
        )}
      </div>
    )
  }
}

export default Tugas12