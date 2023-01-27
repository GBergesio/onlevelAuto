import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export default function Pdf() {
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
          <Text>Section #1</Text>
          <Text>Section #2</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #3</Text>
          <Text>Section #4</Text>
        </View>
      </Page>
    </Document>
  );
}
