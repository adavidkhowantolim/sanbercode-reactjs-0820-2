import React, {useContext} from "react"
import axios from 'axios'
import {FruitContext} from "./tugas14_context"

const FruitTable = () =>{
  const [dataBuah, setDataBuah, inputBuah, setInputBuah, edit, setEdit] = useContext(FruitContext);

  // ketika button delete ditekan
  const handleDeleteSubmit = (event) => {
    const ID_FRUIT = parseInt(event.target.value);
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`)
    .then(res => {
      const newDataBuah = dataBuah.filter(buah => buah.id !== ID_FRUIT)
      setDataBuah(newDataBuah);
    })
  }

  // Untuk memunculkan form editing
  const openEditForm = (event) => {
    setEdit({
      status : true,
      id : parseInt(event.target.value)
    });
    const idx = dataBuah.findIndex((e) => e.id === parseInt(event.target.value));
    setInputBuah({
      name : dataBuah[idx].name,
      price : dataBuah[idx].price,
      weight : dataBuah[idx].weight
    });
  }

  // Untuk menghilangkan form editing
  const closeEditForm = () => {
    setEdit({
      status: false,
      id: null
    })
    setInputBuah({
      name: "",
      price: "",
      weight: ""
    });
  }

  return (
    <>
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
                        edit.status ?
                          <button value={item.id} onClick={closeEditForm}>Close Editing Form</button>
                        : <button value={item.id} onClick={openEditForm}>Open Editing Form</button>
                      }
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </>
  );
}

export default FruitTable
