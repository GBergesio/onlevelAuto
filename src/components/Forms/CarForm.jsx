import { Button, Grid, TextField } from "@mui/material";
import firebaseApp from "../../../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

const db = getFirestore(firebaseApp);

export default function CarForm({ onClose, refreshData, setOpen,setMessage }) {
  const valorInicial = {
    marca: "",
    modelo: "",
    version: "",
    precio: "",
    año: "",
    kilometraje: "",
    transmision: "",
    puertas: "",
    motor: "",
    tipoCombustible: "",
    permuta: "",
    HP: "",
    ubicacion: "",
    adicionales: "",
  };

  const [dato, setDato] = useState(valorInicial);

  const obtenerInputs = (e) => {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value });
  };

  const enviarInfo = async (e) => {
    e.preventDefault();
    console.log(dato);
    try {
      await addDoc(collection(db, "Vehiculo"), {
        ...dato,
      });
    } catch (error) {
      console.log(error);
    }
    setDato({ ...valorInicial });
    refreshData();
    setOpen(true);
    setMessage("Creado, refrescando página")
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  return (
    <Grid component="form" noValidate onSubmit={enviarInfo}>
      <Grid
        container
        spacing={1}
        display="flex"
        flexDirection="row"
        sx={{ mt: 3, mb: 3 }}
      >
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Marca"
            id="marca"
            name="marca"
            size="small"
            placeholder="Marca"
            value={dato.marca}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Modelo"
            id="modelo"
            name="modelo"
            size="small"
            placeholder="Modelo"
            value={dato.modelo}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Version"
            id="version"
            name="version"
            size="small"
            placeholder="Version"
            value={dato.version}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Precio"
            id="precio"
            name="precio"
            size="small"
            placeholder="Precio"
            value={dato.precio}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Tipo"
            id="tipo"
            name="tipo"
            size="small"
            placeholder="SUV, Deportivo, 4X4"
            value={dato.tipo}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Año"
            id="año"
            name="año"
            size="small"
            placeholder="Año"
            value={dato.año}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="HP"
            id="HP"
            name="HP"
            size="small"
            placeholder="HP"
            value={dato.HP}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Transmision"
            id="transmision"
            name="transmision"
            size="small"
            placeholder="Transmision"
            value={dato.transmision}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Kilometraje"
            id="kilometraje"
            name="kilometraje"
            size="small"
            placeholder="Kilometraje"
            value={dato.kilometraje}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Puertas"
            id="puertas"
            name="puertas"
            size="small"
            placeholder="Puertas"
            value={dato.puertas}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Permuta"
            id="permuta"
            name="permuta"
            size="small"
            placeholder="Permuta"
            value={dato.permuta}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Motor"
            id="motor"
            name="motor"
            size="small"
            placeholder="Motor"
            value={dato.motor}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tipo de combustible"
            id="tipoCombustible"
            name="tipoCombustible"
            size="small"
            placeholder="Tipo de combustible"
            value={dato.tipoCombustible}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Adicionales"
            id="adicionales"
            name="adicionales"
            size="small"
            placeholder="Adicionales"
            value={dato.adicionales}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
          <TextField
            fullWidth
            label="Ubicación"
            id="ubicacion"
            name="ubicacion"
            size="small"
            placeholder="Ubicación"
            value={dato.ubicacion}
            onChange={obtenerInputs}
            required
            sx={{ paddingBottom: "8px" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          color="warning"
          variant="outlined"
          onClick={onClose}
          sx={{ marginRight: "5px", borderColor: "#FFAA2A", color: "#FFAA2A" }}
        >
          Cerrar
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "#158E5E" }}
        >
          Crear
        </Button>
      </Grid>
    </Grid>
  );
}
