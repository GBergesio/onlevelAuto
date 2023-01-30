import React, { useState } from "react";
import MaterialReactTable from "material-react-table";
import { Delete, DoorBack, Edit, PictureAsPdf } from "@mui/icons-material";
import { Box, Button, IconButton, Snackbar, Tooltip } from "@mui/material";
import CreateModal from "../Modales/CreateModal";
import { MRT_Localization_ES } from "material-react-table/locales/es";

import firebaseApp from "../../../firebase";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../Pdf";

const db = getFirestore(firebaseApp);

export default function TablaAutos({
  columns,
  data,
  refreshData,
}) {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleDeleteRow = async (row) => {
    await deleteDoc(doc(db, "Vehiculo", row.original.id));
    setOpen(true);
    setMessage("Eliminado, refrescando página");
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

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
            {/* <Tooltip arrow placement="left" title="PDF">
              <IconButton
                onClick={() => {
                  makePDF(row);
                }}
              >
                <PictureAsPdf />
              </IconButton>
            </Tooltip> */}
            <PDFDownloadLink
              document={<Pdf dataAuto={row.original} />}
              fileName="OnLevelPDF"
            >
              <Button>Descargar PDF</Button>
            </PDFDownloadLink>
            <Tooltip arrow placement="left" title="Editar">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Eliminar">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
            size="smaill"
            sx={{ mt: 7, backgroundColor: "#158E5E", fontWeight: "bold" }}
          >
            Nuevo vehículo
          </Button>
        )}
      />
      <CreateModal
        open={createModalOpen}
        setOpen={setOpen}
        setMessage={setMessage}
        refreshData={refreshData}
        onClose={() => setCreateModalOpen(false)}
      />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message={message}
        severity="success"
      />
    </>
  );
}
