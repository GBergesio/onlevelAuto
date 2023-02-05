import { Button, Grid, TextField } from "@mui/material";
import firebaseApp from "../../../firebase";
import { getFirestore, collection, addDoc, } from "firebase/firestore";
import React, { useState } from "react";

const db = getFirestore(firebaseApp);

export default function AgenteForm({ onClose, refreshData, setOpen, setMessage, setSeverity }) {

    const valorInicial = {
        nombre: "",
        apellido: "",
        telefono: "",
    };

    // Para setear los datos que se van a mandar al form
    const [dato, setDato] = useState(valorInicial);
    // Para obtener el valor de los inputs
    const obtenerInputs = (e) => {
        const { name, value } = e.target;
        setDato({ ...dato, [name]: value });
    };

    const enviarInfo = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "Agentes"), {
                nombre: dato.nombre,
                apellido: dato.apellido,
                telefono: dato.telefono,
            });
            setOpen(true);
            setMessage("Creado, refrescando página")
            setSeverity("success")
            setDato({ ...valorInicial });
            onClose()
        } catch (error) {
            setOpen(true);
            setSeverity("error")
            setMessage("Error")
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
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        id="nombre"
                        name="nombre"
                        size="small"
                        placeholder="Nombre"
                        value={dato.nombre}
                        onChange={obtenerInputs}

                        sx={{ paddingBottom: "8px" }}
                    />
                    <TextField
                        fullWidth
                        label="Apellido"
                        id="apellido"
                        name="apellido"
                        size="small"
                        placeholder="Apellido"
                        value={dato.apellido}
                        onChange={obtenerInputs}

                        sx={{ paddingBottom: "8px" }}
                    />
                    <TextField
                        fullWidth
                        label="Teléfono"
                        id="telefono"
                        name="telefono"
                        size="small"
                        placeholder="Formato a subir: 5491164992712"
                        value={dato.telefono}
                        onChange={obtenerInputs}

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
