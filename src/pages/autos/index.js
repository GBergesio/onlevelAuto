/* eslint-disable react-hooks/rules-of-hooks */
import AppBarComp from "@/components/AppBar";
import TablaAutos from "@/components/Tables/TablaAutos";
import { Button, Grid, } from "@mui/material";
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
  const [verTabla, setVerTabla] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataAuto, setDataAuto] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);

  const [agentesUS, setAgentes] = useState([]);
  const [vendedor, setVendedor] = useState({ nombre: "Andres", apellido: "Gagliano", telefono: "5491153073741" })

  const handleAgente = (e) => {
    setVendedor(e.target.value)
  }


  async function refreshData() {
    const vehiculosCollection = await getDocs(collection(db, "Vehiculo"));
    const agentesCollection = await getDocs(collection(db, "Agentes"));
    const VehiculosArr = [];
    const Agentes = [];

    agentesCollection.forEach((doc) => {
      Agentes.push({ ...doc.data(), id: doc.id });
    });

    vehiculosCollection.forEach((doc) => {
      VehiculosArr.push({ ...doc.data(), id: doc.id });
    });

    setAgentes(Agentes)
    setData(VehiculosArr)
  }

  useEffect(() => {
    refreshData()
  }, []);


  function makePDF(data) {
    setOpenPDF(true);
    setDataAuto(data.original);
  }

  return (
    <Grid>
      <AppBarComp agentesUS={agentesUS} vendedor={vendedor} handleAgente={handleAgente} />
      <Button sx={{ mt: 25 }} onClick={() => setVerTabla(true)}>Ver</Button>
      {verTabla === true ? (<>
        {" "}
        <Grid item xs={12} sx={{ mt: 8 }}>
          <TablaAutos
            agentesUS={agentesUS}
            dataAuto={dataAuto}
            columns={columns}
            data={data}
            makePDF={makePDF}
            vendedor={vendedor}
            refreshData={refreshData}
          />
        </Grid>
      </>) : "Sin ver tabla"}
      {/* {openPDF === true ? (
        <>
          <Grid
            item
            xs={12}
            sx={{ mt: 10, pl: 1, pr: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <Grid sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <PDFDownloadLink
                document={<Pdf dataAuto={dataAuto} vendedor={vendedor} />}
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
              sx={{ mt: 5, display: { xs: "none", sm: "block", width: "100%", height: "60vh" } }}
            >
              <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <Pdf dataAuto={dataAuto} vendedor={vendedor} />
              </PDFViewer>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {" "}
          <Grid item xs={12} sx={{ mt: 8 }}>
            <TablaAutos
              agentesUS={agentesUS}
              dataAuto={dataAuto}
              columns={columns}
              data={data}
              makePDF={makePDF}
              vendedor={vendedor}
              refreshData={refreshData}
            />
          </Grid>
        </>
      )} */}
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
