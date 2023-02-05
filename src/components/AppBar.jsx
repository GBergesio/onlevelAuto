import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export default function AppBarComp({ agentesUS, handleAgente, vendedor }) {
  const router = useRouter();

  const goTo = (site) => {
    router.push(site, undefined, { shallow: true });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#333333" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => goTo("/")}
            sx={{ mr: 2, display: { sm: "none" }, color: "#eacea6" }}
          >
            OnLevel Group
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#eacea6",
            }}
          >
            OnLevel Group
          </Typography>
          <Grid sx={{ mt: 1, mb: 1, width: "35%" }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="labelAgente" sx={{ color: "white" }}>Agente vendedor</InputLabel>
              <Select
                labelId="labelAgente"
                id="labelAgenteId"
                label="Agente vendedor"
                value={vendedor}
                onChange={(e) => handleAgente(e)}
                sx={{ color: "white" }}
              >
                {agentesUS.map((agent) => (<MenuItem key={agent.id} value={agent} >{agent.nombre}</MenuItem>))}
                {/* <MenuItem>{agentesUS[0].nombre}</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => goTo("/")}>
              Inicio
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
