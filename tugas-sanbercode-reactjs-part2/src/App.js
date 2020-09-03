import React from 'react';
import logo from './logo.svg';
import './App.css';

// Font bisa diubah di index.css tapi tidak dilakukan
function App() {
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1>
      <form>
        <table>
          <tr>
            <td width = "45%"><label class="bold" for="nama">Nama Pelanggan</label></td>
            <td><input type="text" id="nama" name="nama"></input></td>
          </tr>
          <tr>
            <td><label class="bold" for="daftar">Daftar Item</label></td>
            <td>
              <div>
                <input type="checkbox" id="Semangka" name="daftar" value="Semangka"></input>
                <label for="Semangka">Semangka</label>
              </div>
              <div>
                <input type="checkbox" id="Jeruk" name="daftar" value="Jeruk"></input>
                <label for="Jeruk">Jeruk</label>
              </div>
              <div>
                <input type="checkbox" id="Nanas" name="daftar" value="Nanas"></input>
                <label for="Nanas">Nanas</label>
              </div>
              <div>
                <input type="checkbox" id="Salak" name="daftar" value="Salak"></input>
                <label for="Salak">Salak</label>
              </div>
              <div>
                <input type="checkbox" id="Anggur" name="daftar" value="Anggur"></input>
                <label for="Anggur">Anggur</label>
              </div>
            </td>
          </tr>
        </table>
        <button type="submit" value="kirim">Kirim</button>
      </form>
    </div>
  );
}

export default App;
