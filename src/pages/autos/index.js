import AppBarComp from "@/components/AppBar";
import TablaAutos from "@/components/Tables/TablaAutos";
import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Columns from "@/components/Tables/Columns/CarColumns";
import Pdf from "@/components/Pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import firebaseApp from '../../../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(firebaseApp)


export default function index({autos}) {
  const { columns } = Columns();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openPDF, setOpenPDF] = useState(false);
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataAuto, setDataAuto] = useState([])

  function makePDF(data) {
    setOpenPDF(true);
    setDataAuto(data.original)
    console.log("gatito", data.original);
  }

  return (
    <Grid>
      <AppBarComp />
      {openPDF === true ? (
        <>
          <Grid item xs={12} sx={{ mt: 15 }}>
            <PDFDownloadLink document={<Pdf dataAuto={dataAuto}/>} fileName="OnLevelPDF">
              <Button>Descargar PDF</Button>
            </PDFDownloadLink>
          </Grid>
          <Grid item xs={12} sx={{ mt: 15 }}>
            <PDFViewer style={{ width: "100%", height: "60vh" }}>

            <Pdf dataAuto={dataAuto}/>
            </PDFViewer>
          </Grid>
        </>
      ) : (
        <>
          {" "}
          <Grid item xs={12}>
            <TablaAutos columns={columns} data={autos} makePDF={makePDF}/>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export const getServerSideProps = async (context) => {
  const querySnapshotTwo = await getDocs(collection(db, 'Vehiculo'))

  const Vehiculo = []

  querySnapshotTwo.forEach((doc) => {
    Vehiculo.push({ ...doc.data(), id: doc.id })
  })

  return {
    props: {
      autos: Vehiculo,
    }
  }
}