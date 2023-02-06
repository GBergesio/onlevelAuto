import AppBarComp from "@/components/AppBar";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import CreateModal from "@/components/Modales/CreateModal";
import CreateAgente from "@/components/Modales/CreateAgente";

function Home() {

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [createAgenteOpen, setCreateAgenteOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const router = useRouter();

  const goTo = (site) => {
    router.push(site, undefined, { shallow: true });
  };

  function refreshData() {
    console.log("")
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div>
        <Grid
          container
          spacing={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                mt: 15,
                backgroundColor: "#d5c6b0",
                fontWeight: "600",
              }}
              size="large"
              onClick={() => goTo("/autos")}
            >
              Ver tabla de autos
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ mt: 10, backgroundColor: "#158E5E", fontWeight: "600", }}
              onClick={() => setCreateModalOpen(true)}
              size="large"
            >
              Crear nuevo vehículo
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ mt: 10, backgroundColor: "#158E5E", fontWeight: "600", }}
              onClick={() => setCreateAgenteOpen(true)}
              size="large"
            >
              Crear nuevo vendedor
            </Button>
          </Grid>
        </Grid>
      </div>
      <CreateModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        setOpen={setOpen}
        setMessage={setMessage}
        setSeverity={setSeverity}
        refreshData={refreshData}
      />
      <CreateAgente
        open={createAgenteOpen}
        onClose={() => setCreateAgenteOpen(false)}
        setOpen={setOpen}
        setMessage={setMessage}
        setSeverity={setSeverity}
        refreshData={refreshData}
      />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;
