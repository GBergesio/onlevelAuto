import React, { useState } from "react";
import MaterialReactTable from "material-react-table";
import { Delete, Edit, PictureAsPdf } from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import CreateModal from "../Modales/CreateModal";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../Pdf";

export default function TablaAutos({ columns, data, makePDF }) {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering={false}
        enableRowActions
        editingMode="modal"
        enableEditing
        // onEditingRowSave={handleSaveRowEdits}
        // onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "0.1rem" }}>
            <Tooltip arrow placement="left" title="PDF">
              <IconButton
                onClick={() => {
                  // setOpenPDF(true)
                  makePDF(row);
                }}
              >
                <PictureAsPdf />
              </IconButton>
            </Tooltip>
            {/* <PDFDownloadLink document={<Pdf/>} fileName="OnLevelPDF">
            </PDFDownloadLink> */}
            {/* <Button>Descargar PDF</Button> */}
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
            size="smaill"
            sx={{ mt: 7 }}
          >
            Crear nuevo vehículo
          </Button>
        )}
      />
      <CreateModal
        // columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        // onSubmit={handleCreateNewRow}
      />
    </>
  );
}
