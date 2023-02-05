import React, { useState } from "react";
import MaterialReactTable from "material-react-table";
import { Delete, DoorBack, Edit, PictureAsPdf } from "@mui/icons-material";
import { Alert, Box, Button, Grid, IconButton, Select, Snackbar, Tooltip } from "@mui/material";
import CreateModal from "../Modales/CreateModal";
import { MRT_Localization_ES } from "material-react-table/locales/es";

import firebaseApp from "../../../firebase";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../Pdf";
import ConfirmationModal from "../Modales/ConfirmationModal";

const db = getFirestore(firebaseApp);

export default function TablaAutos({
  columns,
  data,
  refreshData,
  makePDF,
  vendedor
}) {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [dataR, setDataR] = useState([]);

  const handleDeleteRow = async (row) => {
    await deleteDoc(doc(db, "Vehiculo", row.original.id));
    setOpen(true);
    setMessage("Eliminado, refrescando página");
    setSeverity("warning")
    refreshData()
    setConfirmationModalOpen(false)
  };

  const handleConfirmationModal = (row) => {
    setDataR(row)
    setConfirmationModalOpen(true)

  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering={false}
        enableRowActions
        editingMode="modal"
        enableEditing
        localization={MRT_Localization_ES}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "0.1rem" }}>
            <Tooltip arrow placement="left" title="PDF">
              <IconButton
                onClick={() => {
                  makePDF(row);
                }}
              >
                <PictureAsPdf />
              </IconButton>
            </Tooltip>
            {/* <PDFDownloadLink
              document={<Pdf dataAuto={row.original} vendedor={vendedor} />}
              fileName={'PDF' + " " + row.original.marca + " " + row.original.modelo + " "}
            >
              <Button>Descargar PDF</Button>
            </PDFDownloadLink> */}
            <Tooltip arrow placement="left" title="Editar">
              {/* <IconButton onClick={() => table.setEditingRow(row)}> */}
              <IconButton onClick={() => {
                setOpen(true);
                setMessage("Funcion no disponible momentaneamente");
                setSeverity("warning")
              }}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Eliminar">
              {/* <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton> */}
              <IconButton color="error" onClick={() => handleConfirmationModal(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )
        }
        renderTopToolbarCustomActions={() => (
          <Button
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
            size="smaill"
            sx={{ mt: 4, backgroundColor: "#158E5E", fontWeight: "bold" }}
          >
            Nuevo vehículo
          </Button>
        )}
      />
      <CreateModal
        open={createModalOpen}
        setOpen={setOpen}
        setMessage={setMessage}
        setSeverity={setSeverity}
        refreshData={refreshData}
        onClose={() => setCreateModalOpen(false)}
      />
      <ConfirmationModal
        handleDeleteRow={handleDeleteRow}
        open={confirmationModalOpen}
        dataR={dataR}
        setOpen={setOpen}
        onClose={() => setConfirmationModalOpen(false)}
      />
      <Snackbar Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar >
    </>
  );
}
