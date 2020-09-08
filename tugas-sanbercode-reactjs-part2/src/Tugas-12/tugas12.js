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
      inputNamaBuahEdit : "",
      inputHargaBuahEdit : "",
      inputBeratBuahEdit : "",
      inputIndeksBuahDelete : 0,
    }

    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleDeleteChange = this.handleDeleteChange.bind(this);

    this.openDeleteForm = this.openDeleteForm.bind(this);
    this.closeDeleteForm = this.closeDeleteForm.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
  }

  openDeleteForm(){
    document.getElementById("deleteForm").style.display = "block";
    document.getElementById("buttonCloseDelete").style.display = "block";
    document.getElementById("buttonOpenDelete").style.display = "none";
  }

  closeDeleteForm(){
    document.getElementById("deleteForm").style.display = "none";
    document.getElementById("buttonCloseDelete").style.display = "none";
    document.getElementById("buttonOpenDelete").style.display = "block";
  }

  openEditForm(){
    document.getElementById("editForm").style.display = "block";
    document.getElementById("buttonCloseEdit").style.display = "block";
    document.getElementById("buttonOpenEdit").style.display = "none";
  }

  closeEditForm(){
    document.getElementById("editForm").style.display = "none";
    document.getElementById("buttonCloseEdit").style.display = "none";
    document.getElementById("buttonOpenEdit").style.display = "block";
  }

  handleEditChange(stateName, event){
    this.setState({
      [stateName] : event.target.value
    });
  }

  handleEditSubmit(event){
    event.preventDefault();
    let name = this.state.namaBuah;
    name.splice(this.state.inputIndeksBuahDelete, 1);
    this.setState({
      namaBuah: name,
      inputIndeksBuahDelete: ""
    })
  }

  handleDeleteChange(event){
    this.setState({inputIndeksBuahDelete: event.target.value});
  }

  handleDeleteSubmit(event){
    event.preventDefault();
    let name = this.state.namaBuah;
    name.splice(this.state.inputIndeksBuahDelete, 1);
    this.setState({
      namaBuah: name,
      inputIndeksBuahDelete: ""
    })
  }

  render(){
    return(
      <>
        {/* Table */}
        <h1>Tabel Harga Buah</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Nama</th>
              <th className="th">Harga</th>
              <th className="th">Berat</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.namaBuah.map((val, index)=>{
                  return(                    
                    <tr>
                      <td className="td">{val}</td>
                      <td className="td">{this.state.hargaBuah[index]}</td>
                      <td className="td">{this.state.beratBuah[index]/1000} kg</td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
        {/* Edit Form */}
        <button className="button_open" onClick={this.openEditForm} id="buttonOpenEdit">Open Edit Form</button>
        <button className="button_close" onClick={this.closeEditForm} id="buttonCloseEdit">Close Edit Form</button>
        <form className="form_edit" onSubmit={this.handleEditSubmit} id="editForm">
          <table>
            <tr>
              <label>Masukkan nama buah yang ingin ditambah:  </label>
              <input name="namaBuah" type="text" value={this.state.inputNamaBuahEdit} onChange={this.handleEditChange.bind(this, "namaBuah")}></input>
            </tr>
            <tr>
              <label>Masukkan harga buah yang ingin ditambah: </label>
              <input name="hargaBuah" type="text" value={this.state.inputHargaBuahEdit} onChange={this.handleEditChange.bind(this, "hargaBuah")}></input>
            </tr>
            <tr>
              <label>Masukkan berat buah yang ingin ditambah: </label>
              <input name="beratBuah" type="text" value={this.state.inputBeratBuahEdit} onChange={this.handleEditChange.bind(this, "beratBuah")}></input>
            </tr>
            <tr>
              <input type="submit"></input>
            </tr>            
          </table>
        </form>
        {/* Delete Form */}
        <button className="button_open" onClick={this.openDeleteForm} id="buttonOpenDelete">Open Delete Form</button>
        <button className="button_close" onClick={this.closeDeleteForm} id="buttonCloseDelete">Close Delete Form</button>
        <form className="form_delete" onSubmit={this.handleDeleteSubmit} id="deleteForm">
          <table>
            <tr>
              <label>Masukkan indeks yang ingin dihapus: </label>
              <input type="text" value={this.state.inputIndeksBuahDelete} onChange={this.handleDeleteChange}></input>
            </tr>
            <tr>
              <input type="submit"></input>
            </tr>            
          </table>
        </form>
      </>
    )
  }
}

export default Tugas12