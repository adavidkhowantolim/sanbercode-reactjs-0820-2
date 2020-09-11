import React from "react"
import {FruitProvider} from "./tugas14_context"
import FruitTable from "./tugas14_tabel"
import FruitForm from "./tugas14_form"
import './tugas14.css';

const Tugas14 = () =>{
  return(
    <FruitProvider>
      <div style={{width: "70%", margin: "0 auto"}}>
        <FruitTable/>
        <FruitForm/>
      </div>
    </FruitProvider>
  )
}

export default Tugas14

