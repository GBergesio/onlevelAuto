import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import CarForm from "../Forms/CarForm";

export default function CreateModal({ setOpen, open, onClose, refreshData, setMessage, setSeverity }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle textAlign="center">Nuevo vehículo</DialogTitle>
      <DialogContent>
        <CarForm onClose={onClose} refreshData={refreshData} setOpen={setOpen} setSeverity={setSeverity} setMessage={setMessage} />
      </DialogContent>
    </Dialog>
  );
}
