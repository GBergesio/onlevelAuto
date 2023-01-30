import AppBarComp from "@/components/AppBar";
import Pdf from "@/components/Pdf";
import styles from "@/styles/Home.module.css";
import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import CreateModal from "@/components/Modales/CreateModal";

function Home() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const router = useRouter();

  const goTo = (site) => {
    router.push(site, undefined, { shallow: true });
  };

  return (
    <>
      <div>
        <AppBarComp />
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
              sx={{ mt: 10,backgroundColor: "#158E5E",fontWeight: "600", }}
              onClick={() => setCreateModalOpen(true)} 
              size="large"
            >
              Crear nuevo auto
            </Button>
          </Grid>
        </Grid>
      </div>
      <CreateModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
    </>
  );
}

export default Home;
