/* eslint-disable react-hooks/rules-of-hooks */
import AppBarComp from "@/components/AppBar";
import TablaAutos from "@/components/Tables/TablaAutos";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Columns from "@/components/Tables/Columns/CarColumns";
import Pdf from "@/components/Pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";


import firebaseApp from "../../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default function index({ autos }) {
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
    // setOpenPDF(true);
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
            <PDFDownloadLink
              document={<Pdf dataAuto={dataAuto} />}
              fileName="OnLevelPDF"
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
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 15, display: { xs: "none", sm: "block" } }}
          >
            <PDFViewer style={{ width: "100%", height: "60vh" }}>
              <Pdf dataAuto={dataAuto} />
            </PDFViewer>
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
              // makePDF={makePDF}
              refreshData={refreshData}
            />
          </Grid>
        </>
      )}
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/onlevelcars.appspot.com/o/a3440891-9eaf-471a-8eb3-c54ff729c95e?alt=media&token=8f8fb79e-3f3b-40f4-9cdf-1b96c5ed5bdb" /> */}
    </Grid>
  );
}

export const getServerSideProps = async (context) => {
  const querySnapshotTwo = await getDocs(collection(db, "Vehiculo"));

  const Vehiculo = [];

  querySnapshotTwo.forEach((doc) => {
    Vehiculo.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      autos: Vehiculo,
    },
  };
};
