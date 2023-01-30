import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import CarForm from "../Forms/CarForm";

export default function CreateModal({setOpen, open, columns, onClose, onSubmit,refreshData, setMessage }) {
  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Nuevo vehículo</DialogTitle>
      <DialogContent>
        <CarForm onClose={onClose} refreshData={refreshData} setOpen={setOpen} setMessage={setMessage}/>
      </DialogContent>
    </Dialog>
  );
}
