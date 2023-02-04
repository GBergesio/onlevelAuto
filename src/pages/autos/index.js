/* eslint-disable react-hooks/rules-of-hooks */
import AppBarComp from "@/components/AppBar";
import TablaAutos from "@/components/Tables/TablaAutos";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Columns from "@/components/Tables/Columns/CarColumns";
import Pdf from "@/components/Pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import firebaseApp from "../../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default function index({ autos, agentes }) {
  const { columns } = Columns();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openPDF, setOpenPDF] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataAuto, setDataAuto] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);

  useEffect(() => {
    refreshData();
  });

  const refreshData = () => {
    setData(autos);
    console.log("se ejectuta el refresh");
  };

  function makePDF(data) {
    setOpenPDF(true);
    setDataAuto(data.original);
  }

  return (
    <Grid>
      <AppBarComp />
      {openPDF === true ? (
        <>
          <Grid
            item
            xs={12}
            sx={{ mt: 15, display: "flex", justifyContent: "center" }}
          >
            <Grid sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <PDFDownloadLink
                document={<Pdf dataAuto={dataAuto} />}
                fileName={'PDF' + " " + dataAuto.marca + " " + dataAuto.modelo + " "}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    backgroundColor: "#d5c6b0",
                    fontWeight: "600",
                  }}
                  size="large"
                >
                  Descargar PDF
                </Button>
              </PDFDownloadLink>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#d5c6b0",
                  fontWeight: "600",
                }}
                size="large"
                onClick={() => setOpenPDF(false)}
              >
                Volver a la tabla
              </Button>
            </Grid>


            <Grid
              item
              xs={12}
              sx={{ mt: 15, display: { xs: "none", sm: "block", width: "100%", height: "60vh" } }}
            >
              <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <Pdf dataAuto={dataAuto} />
              </PDFViewer>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {" "}
          <Grid item xs={12} sx={{ mt: 8 }}>
            <TablaAutos
              dataAuto={dataAuto}
              columns={columns}
              data={data}
              makePDF={makePDF}
              refreshData={refreshData}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export const getServerSideProps = async (context) => {
  const querySnapshotTwo = await getDocs(collection(db, "Vehiculo"));
  const querySnapshotAgentes = await getDocs(collection(db, "Agentes"));

  const Vehiculo = [];
  const Agentes = [];

  querySnapshotTwo.forEach((doc) => {
    Vehiculo.push({ ...doc.data(), id: doc.id });
  });

  querySnapshotAgentes.forEach((doc) => {
    Agentes.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      autos: Vehiculo,
      agentes: Agentes
    },
  };
};
