import { Button, Grid } from '@mui/material';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Pdf from '../Pdf';

const PdfView = ({ dataAuto, vendedor, setOpenPDF }) => {
    return (
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
                {/* <Grid
                    item
                    xs={12}
                    sx={{ mt: 5, display: { xs: "none", sm: "block", width: "100%", height: "60vh" } }}
                >
                    <PDFViewer style={{ width: "100%", height: "100vh" }}>
                        <Pdf dataAuto={dataAuto} vendedor={vendedor} />
                    </PDFViewer>
                </Grid> */}
            </Grid>
        </>
    );
}

export default PdfView;
