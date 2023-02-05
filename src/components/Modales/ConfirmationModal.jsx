import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function ConfirmationModal({ open, onClose, dataR, handleDeleteRow }) {

    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle textAlign="center">Confirmar eliminación</DialogTitle>
            <DialogActions sx={{ width: "300px", display: "flex", justifyContent: "center" }}>
                <Button variant="contained" color="inherit" onClick={onClose}>Salir</Button>
                <Button
                    onClick={() => handleDeleteRow(dataR)}
                    variant="contained"
                    sx={{ backgroundColor: "#a42c3c" }}>Eliminar</Button>
            </DialogActions>
        </Dialog>
    );
}
