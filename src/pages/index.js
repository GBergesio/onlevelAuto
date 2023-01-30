import AppBarComp from "@/components/AppBar";
import Pdf from "@/components/Pdf";
import styles from "@/styles/Home.module.css";
import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

function Home() {
  const [open, setOpen] = useState(false);
  
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
              sx={{ mt: 10 }}
              color="info"
              size="large"
              onClick={() => goTo("/autos")}
            >
              Ver tabla de autos
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ mt: 10 }}
              color="success"
              size="large"
            >
              Crear nuevo auto
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
