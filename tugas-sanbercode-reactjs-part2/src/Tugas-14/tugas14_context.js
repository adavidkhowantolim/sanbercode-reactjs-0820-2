import React, { useState, createContext, useEffect} from "react";
import axios from 'axios'

export const FruitContext = createContext();

export const FruitProvider = props => {
  const [dataBuah, setDataBuah] = useState(null);
  const [inputBuah, setInputBuah] = useState({
    name: "",
    price: "",
    weight: ""
  });
  const [edit, setEdit] = useState({
    status: false,
    id: null
  });

  useEffect(() => {
    if (dataBuah === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDataBuah(res.data);
      }) 
    }
  }, [dataBuah]);

  return (
    <FruitContext.Provider value={[dataBuah, setDataBuah, inputBuah, setInputBuah, edit, setEdit]}>
      {props.children}
    </FruitContext.Provider>
  );
};
