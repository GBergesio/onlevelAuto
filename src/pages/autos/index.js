import AppBarComp from "@/components/AppBar";
import TablaAutos from "@/components/Tables/TablaAutos";
import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Columns from "@/components/Tables/Columns/CarColumns";
import Pdf from "@/components/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function index() {
  const { columns } = Columns();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openPDF, setOpenPDF] = useState(false);
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataAuto, setDataAuto] = useState([])

  function makePDF(data) {
    setOpenPDF(true);
    setDataAuto(data.original)
    console.log("gatito", data.original);
  }

  const data = [
    {
      name: {
        vehiculo: "Ford Fiesta",
        modelo: "2020",
      },
      Cilindrada: "2.0",
      Kilometraje: "165000Kms",
      Precio: "$2.500.000",
    },
    {
      name: {
        vehiculo: "Honda Civic",
        modelo: "2017",
      },
      Cilindrada: "2.5",
      Kilometraje: "15000Kms",
      Precio: "$4.500.000",
    },
    {
      name: {
        vehiculo: "VW Bora",
        modelo: "2010",
      },
      Cilindrada: "2.0",
      Kilometraje: "265000Kms",
      Precio: "$5.500.000",
    },
    {
      name: {
        vehiculo: "Toyota Corolla",
        modelo: "2022",
      },
      Cilindrada: "21.6",
      Kilometraje: "5000Kms",
      Precio: "$7.500.000",
    },
  ];

  return (
    <Grid>
      <AppBarComp />
      {openPDF === true ? (
        <>
          <Grid item xs={12} sx={{ mt: 15 }}>
            <PDFDownloadLink document={<Pdf dataAuto={dataAuto}/>} fileName="OnLevelPDF">
              <Button>Descargar PDF</Button>
            </PDFDownloadLink>
          </Grid>
          <Grid item xs={12} sx={{ mt: 15 }}>
            <Pdf dataAuto={dataAuto}/>
          </Grid>
        </>
      ) : (
        <>
          {" "}
          <Grid item xs={12}>
            <TablaAutos columns={columns} data={data} makePDF={makePDF}/>
          </Grid>
        </>
      )}
    </Grid>
  );
}
