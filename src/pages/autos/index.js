import AppBarComp from "@/components/AppBar";
import CarTable from "@/components/Table";
import { Grid } from "@mui/material";
import React from "react";

export default function index() {
  return (
    <Grid>
      <AppBarComp />
      <Grid item xs={12} sx={{mt:9}}>
        <CarTable />
      </Grid>
    </Grid>
  );
}
