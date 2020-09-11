import React, {useContext} from "react"
import axios from 'axios'
import {FruitContext} from "./tugas14_context"

const FruitForm = () =>{
  const [dataBuah, setDataBuah, inputBuah, setInputBuah, edit, setEdit] = useContext(FruitContext);

  const handleEditChange = (event) => {
    switch (event.target.name){
      case "name": {
        setInputBuah({...inputBuah, name : event.target.value});
        break;
      }
      case "price": {
        setInputBuah({...inputBuah, price : event.target.value});
        break;
      }
      case "weight": {
        setInputBuah({...inputBuah, weight : event.target.value});
        break;
      }
      default:
        break;
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit.status){
      axios.put(`http://backendexample.sanbercloud.com/api/fruits/${edit.id}`, { name: inputBuah.name, 
                                                                                price: inputBuah.price, 
                                                                                weight: inputBuah.weight} )
      .then(res => {
        let newDataBuah = dataBuah.map(buah => {
          if (buah.id === edit.id){
            buah.name = inputBuah.name;
            buah.price = inputBuah.price;
            buah.weight = inputBuah.weight;
          }
          return buah;
        });
        setDataBuah(newDataBuah);
      })
    } else {
      axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: inputBuah.name, 
                                                                      price: inputBuah.price, 
                                                                      weight: inputBuah.weight} )
      .then(res => {
        var data = res.data;
        setDataBuah([...dataBuah, 
          {
            id: data.id, 
            name: data.name, 
            price: data.price, 
            weight: data.weight
          }
        ]);
        setInputBuah({
          name: "",
          price: "",
          weight: ""
        });
      })
    }
  }

  return (
    <form className="form_edit" onSubmit={handleSubmit} id="editForm">
      <table className="table_form">
        <tr>
          <td><label>Nama:  </label></td>
          <td><input type="text" name="name" value={inputBuah.name} onChange={handleEditChange}></input></td>
        </tr>
        <tr>
          <td><label>Harga: </label></td>
          <td><input type="text" name="price" value={inputBuah.price} onChange={handleEditChange}></input></td>
        </tr>
        <tr>
          <td><label>Berat:  </label></td>
          <td><input type="text" name="weight" value={inputBuah.weight} onChange={handleEditChange}></input></td>
        </tr>
      </table>
      <input type="submit"></input>
    </form>
  )
}

export default FruitForm
