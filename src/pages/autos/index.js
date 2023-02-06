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
import PdfView from "@/components/PDFView/PdfView";

const db = getFirestore(firebaseApp);

export default function index() {
  const { columns } = Columns();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openPDF, setOpenPDF] = useState(false);
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
      {openPDF === true ? (<PdfView dataAuto={dataAuto} vendedor={vendedor} setOpenPDF={setOpenPDF} />) :
        (<Grid item xs={12} sx={{ mt: 8 }}>
          <TablaAutos
            agentesUS={agentesUS}
            dataAuto={dataAuto}
            columns={columns}
            data={data}
            makePDF={makePDF}
            vendedor={vendedor}
            refreshData={refreshData}
          />
        </Grid>)}

    </Grid>
  );
}
