import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

export default function Pdf({ dataAuto }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Auto: {dataAuto.name.vehiculo}</Text>
        </View>
        <View style={styles.section}>
          <Text>Modelo: {dataAuto.name.modelo}</Text>
        </View>
        <View style={styles.section}>
          <Text>Precio: {dataAuto.Precio}</Text>
        </View>
      </Page>
    </Document>
  );
}
