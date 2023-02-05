import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import AgenteForm from "../Forms/AgenteForm";

export default function CreateAgente({ setOpen, open, onClose, refreshData, setMessage, setSeverity }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle textAlign="center">Nuevo agente</DialogTitle>
            <DialogContent>
                <AgenteForm onClose={onClose} refreshData={refreshData} setOpen={setOpen} setSeverity={setSeverity} setMessage={setMessage} />
            </DialogContent>
        </Dialog>
    );
}
