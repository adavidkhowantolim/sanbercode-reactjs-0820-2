import React from "react";
import {NavProvider} from "./tugas15_context"
import NavRouter from "./tugas15_navrouter"


import './tugas15.css';

// ubah navbar jadi context kaya tugas 14 dan ubah stylenya
export default function Tugas15 () {
  return(
    <NavProvider>
      <NavRouter/>
    </NavProvider>
  );
};