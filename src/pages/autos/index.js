import AppBarComp from "@/components/AppBar";
import TablaAutos from "@/components/Tables/TablaAutos";
import { Button, Grid } from "@mui/material";
import React from "react";
import Columns from "@/components/Tables/Columns/CarColumns";

export default function index() {
  const { columns } = Columns();

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
      {/* <Grid item xs={12} sx={{ mt: 10, mb: 3 }}>
        <Button
          color="secondary"
          onClick={() => setCreateModalOpen(true)}
          variant="contained"
          size="smaill"
        >
          Crear nuevo vehículo
        </Button>
      </Grid> */}
      <Grid item xs={12}>
        <TablaAutos columns={columns} data={data} />
      </Grid>
    </Grid>
  );
}
