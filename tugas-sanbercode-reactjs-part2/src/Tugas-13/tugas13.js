import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './tugas13.css';

const Tugas13 = () => {
  const [dataBuah, setDataBuah] = useState(null);
  const [inputNamaBuah, setInputNamaBuah] = useState(null);
  const [inputHargaBuah, setInputHargaBuah] = useState(null);
  const [inputBeratBuah, setInputBeratBuah] = useState(null);
  const [editStatus, setEditStatus] = useState(false);
  const [editID, setEditID] = useState(null);

  // masukkan data
  useEffect(() => {
    if (dataBuah === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDataBuah(res.data);
      }) 
    }
  }, [dataBuah]);

  // ketika button delete ditekan
  const handleDeleteSubmit = (event) => {
    const ID_FRUIT = parseInt(event.target.value);
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`)
    .then(res => {
      console.log(res.data);
      const newDataBuah = dataBuah.filter(buah => buah.id !== ID_FRUIT)
      setDataBuah(newDataBuah);
    })
  }

  // Untuk memunculkan form editing
  const openEditForm = (event) => {
    setEditStatus(true);
    setEditID(parseInt(event.target.value));
    const idx = dataBuah.findIndex((e) => e.id === parseInt(event.target.value));
    setInputNamaBuah(dataBuah[idx].name);
    setInputHargaBuah(dataBuah[idx].price);
    setInputBeratBuah(dataBuah[idx].weight);
  }

  // Untuk menghilangkan form editing
  const closeEditForm = () => {
    setEditStatus(false);
    setEditID(null);
    setInputNamaBuah("");
    setInputHargaBuah("");
    setInputBeratBuah("");
  }

  // onChange input nama buah
  const handleEditChange = (event) => {
    switch (event.target.name){
      case "name": {
        setInputNamaBuah(event.target.value);
        break;
      }
      case "price": {
        setInputHargaBuah(event.target.value);
        break;
      }
      case "weight": {
        setInputBeratBuah(event.target.value);
        break;
      }
      default:
        break;
    }
  }

  // ketika button submit form ditekan
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editStatus){
      // get editing index
      axios.put(`http://backendexample.sanbercloud.com/api/fruits/${editID}`, { name: inputNamaBuah, 
                                                                                price: inputHargaBuah, 
                                                                                weight: inputBeratBuah} )
      .then(res => {
        let newDataBuah = dataBuah.map(buah => {
          if (buah.id === editID){
            buah.name = inputNamaBuah;
            buah.price = inputHargaBuah;
            buah.weight = inputBeratBuah;
          }
          return buah;
        });
        setDataBuah(newDataBuah);
      })
    } else {
      axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: inputNamaBuah, 
                                                                      price: inputHargaBuah, 
                                                                      weight: inputBeratBuah} )
      .then(res => {
        var data = res.data;
        setDataBuah([...dataBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
        setInputNamaBuah("");
        setInputHargaBuah("");
        setInputBeratBuah("");
      })
    }
  }

  // render component
  return(
    <div style={{width: "70%", margin: "0 auto"}}>
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
              dataBuah !== null && dataBuah.map((item)=>{
                return(                    
                  <tr key={item.id}>
                    <td className="td">{item.name}</td>
                    <td className="td">{item.price}</td>
                    <td className="td">{item.weight/1000} kg</td>
                    <td className="kolom_aksi">
                      <button value={item.id} onClick={handleDeleteSubmit}>Delete</button>
                      {
                        editStatus ?
                          <button value={item.id} onClick={closeEditForm}>Close Editing Form</button>
                        : <button value={item.id} onClick={openEditForm}>Open Editing Form</button>
                      }
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
      {/* Form editing */}
      {
        <form className="form_edit" onSubmit={handleSubmit} id="editForm">
          <table className="table_form">
            <tr>
              <td><label>Nama:  </label></td>
              <td><input type="text" name="name" value={inputNamaBuah} onChange={handleEditChange}></input></td>
            </tr>
            <tr>
              <td><label>Harga: </label></td>
              <td><input type="text" name="price" value={inputHargaBuah} onChange={handleEditChange}></input></td>
            </tr>
            <tr>
              <td><label>Berat:  </label></td>
              <td><input type="text" name="weight" value={inputBeratBuah} onChange={handleEditChange}></input></td>
            </tr>
          </table>
          <input type="submit"></input>
        </form>
      }
    </div>
  )
}


export default Tugas13