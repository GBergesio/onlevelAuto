import { Button, Grid, TextField, Typography } from "@mui/material";
import firebaseApp from "../../../firebase";
import { getFirestore, collection, addDoc, } from "firebase/firestore";
import React, { useState } from "react";
// import { uploadFile } from "firestoredos";
// import { uploadArrayFiles } from "firestoredos";


const db = getFirestore(firebaseApp);

export default function CarForm({ onClose, refreshData, setOpen, setMessage, setSeverity }) {

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
    imagenPrincipal: "",
    imagenes: [],
  };

  // Para setear los datos que se van a mandar al form
  const [dato, setDato] = useState(valorInicial);
  // Para obtener el valor de los inputs
  const obtenerInputs = (e) => {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value });
  };

  const [imgPrincipal, setImgPrincipal] = useState("");
  const [imgPrincipalNombre, setImgPrincipalNombre] = useState("");
  const [arrImgsNombres, setArrImgsNombres] = useState([]);

  //original↓
  // const handleImagenPrincipal = async (event) => {

  //   const file = event.target.files[0]
  //   const base64 = await convertBase64(file)

  //   // setImgPrincipal(base64)
  //   // setImgPrincipalNombre(file)
  //   console.log("BASE 64 principal", base64)

  // }

  const handleImagenPrincipal = async (event) => {
    const file = event.target.files[0]
    const image = new Image();
    image.src = URL.createObjectURL(file);

    await new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = (image.naturalHeight / image.naturalWidth) * 800;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const base64 = canvas.toDataURL('image/jpeg');

        setImgPrincipal(base64)
        setImgPrincipalNombre(file)
        console.log("BASE 64 comprimida", base64)
        resolve();
      };
    });
  }

  let arrayB64 = []

  // original↓
  // const handleFileReadOriginal = async (event) => {

  //   for (let file of event) {
  //     const base64 = await convertBase64(file)
  //     arrayB64.push(base64)
  //   }
  //   setArrImgsNombres(arrayB64)
  //   // setArrImgsNombres(arrayB64)
  //   console.log("array b64", arrayB64)
  // }

  const handleFileRead = async (event) => {
    const arrayB64 = [];

    for (let file of event) {
      const image = new Image();
      image.src = URL.createObjectURL(file);

      await new Promise((resolve) => {
        image.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 800;
          canvas.height = (image.naturalHeight / image.naturalWidth) * 800;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          const base64 = canvas.toDataURL('image/jpeg');
          arrayB64.push(base64)

          resolve();
        };
      });
    }

    setArrImgsNombres(arrayB64)
    console.log("array b64", arrayB64)
  };


  const convertBase64 = (file) => {

    console.log("FILE", file)

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }


  const enviarInfo = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Vehiculo"), {
        marca: dato.marca,
        modelo: dato.modelo,
        version: dato.version,
        precio: dato.precio,
        año: dato.año,
        kilometraje: dato.kilometraje,
        transmision: dato.transmision,
        puertas: dato.puertas,
        motor: dato.motor,
        tipoCombustible: dato.tipoCombustible,
        permuta: dato.permuta,
        HP: dato.HP,
        ubicacion: dato.ubicacion,
        adicionales: dato.adicionales,
        imagenPrincipal: imgPrincipal,
        // imagenes: arrayB64
        imagenes: arrImgsNombres
      });
      setOpen(true);
      setMessage("Creado, refrescando página")
      setSeverity("success")
      setDato({ ...valorInicial });
      onClose()
      console.log("arrImgsNombres adentro del send", arrImgsNombres)
    } catch (error) {
      let errorImage = 'FirebaseError: The value of property "imagenPrincipal" is longer than 1048487 bytes.'
      setOpen(true);
      setSeverity("error")

      if (error = errorImage) {
        setMessage("Error! Imagen principal excede 1MB")
      }
      else {
        setMessage("Error")
      }
    }
    refreshData();
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

            sx={{ paddingBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "15px" }}>
          <label for="imagenPrincipal">Imagen Principal</label>
          <input
            type="file"
            name='imagenPrincipal'
            id='imagenPrincipal'
            inputProps={{ accept: 'image/*' }}
            onChange={e => handleImagenPrincipal(e)}
          />
          {/* <p>Imagen: {imgPrincipalNombre.name}</p> */}
          {/* {imgPrincipalNombre ? `Nombre: ${imgPrincipalNombre.name}` : ""} */}
          <Grid>
            {/* {imgPrincipalNombre ? (<Typography sx={{ fontSize: 10 }}>Nombre: ${imgPrincipalNombre.name}</Typography>) : ""} */}
            {imgPrincipalNombre.size > 1048487 ? (<Typography sx={{ color: "red", fontSize: 10 }}>El peso de la imagen debe ser menor a 1048487Kbs - El peso actual es: {imgPrincipalNombre.size} Kbs</Typography>) : ""}
          </Grid>
          <label for="imagenes">Más imágenes</label>
          <input
            name='imagenes'
            id='imagenes'
            type="file"
            multiple
            inputProps={{ accept: 'image/*' }}
            onChange={e => handleFileRead(e.target.files)}
          />

          {/* <label for="prueba">Prueba imagenes</label>
          <input
            name='prueba'
            id='prueba'
            type="file"
            multiple
            inputProps={{ accept: 'image/*' }}
            onChange={e => handleFileReadOriginal(e.target.files)}
          /> */}
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
