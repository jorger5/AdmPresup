import React from 'react';
import {Header} from "./Components/Header";
import {Balance} from "./Components/Balance";
import {GananciasGastos} from "./Components/GananciasGastos";
import {ListaTransacciones} from "./Components/ListaTransacciones";
import {SumarTransaccion} from "./Components/SumarTransaccion";
import {Footer} from "./Components/Footer";



import { GlobalProvider } from "./Context/GlobalState";


import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header/>
          <div className="operaciones">
            <Balance />
            <GananciasGastos />
            <SumarTransaccion />
          </div>
          <div className="historial">
           <ListaTransacciones />  
          </div>
      </div>
      <Footer />  
    </GlobalProvider>
  );
}

export default App;
