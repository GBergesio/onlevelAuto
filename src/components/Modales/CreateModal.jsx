import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import CarForm from "../Forms/CarForm";

export default function CreateModal({ open, columns, onClose, onSubmit }) {
  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Crear nuevo vehículo</DialogTitle>
      <DialogContent>
        <CarForm/>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancelar</Button>
        <Button color="secondary"  variant="contained">
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// onClick={handleSubmit}