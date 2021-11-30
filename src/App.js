import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CustomAlert from "./components/CustomAlert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const openAlert = () => {
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="App">
      <NavBar title={"MENU"} openAlert={openAlert} />
      <ItemListContainer />
      {showAlert === true ? (
        <CustomAlert
          severity={"info"}
          title={"Alerta"}
          message={"Se ha presionado el boton de carrito"}
          strongMessage={"Deshabilitado"}
          onClose={closeAlert}
        />
      ) : null}
    </div>
  );
}

export default App;
