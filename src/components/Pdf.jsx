import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

export default function Pdf({ dataAuto }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#333333",
      height: "80px",
      width: "100%",
      marginTop: "25px",
      marginBottom: "25px",
    },
    firstInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "100%",
    },
    imageHeader: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      marginTop: "7px",
      marginLeft: "25px",
    },
    textHeader: {
      fontSize: "14px",
      paddingLeft: "25px",
      color: "white",
      paddingBottom: "2px",
    },
    imageSection: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      marginTop: "20px",
      marginLeft: "25px",
    },
    imageSecSection: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      marginTop: "20px",
      marginLeft: "25px",
    },
    titulo: {
      fontSize: "26px",
      fontWeight: "bold",
      paddingBottom: "10px",
      paddingLeft: "25px",
    },
    subtitulo: {
      fontSize: "14px",
      paddingLeft: "25px",
    },
    bodySection: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginLeft: "25px",
    },
    textoCategorias: {
      fontSize: "12px",
      paddingBottom: "3px",
    },
    textoCategoriasD: {
      fontSize: "12px",
      paddingBottom: "3px",
      paddingLeft: "15px",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.imageHeader}>
              <Image
                style={{ width: "180px", height: "65px" }}
                alt="bmw"
                src="https://i.ibb.co/NmLcfsH/logo.png"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginRight: "25px",
                paddingTop: "10px",
              }}
            >
              <Text style={styles.textHeader}>+54 9 11 3238-7973</Text>
              <Text style={styles.textHeader}>Ayelen Paleo</Text>
              <View
                style={{
                  backgroundColor: "#e5c69e",
                  borderRadius: "5px",
                  width: "60px",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: "11px",
                    color: "black",
                    fontWeight: "extrabold",
                  }}
                >
                  Contacto
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.firstInfo}>
          <View style={{ gap: "25px" }}>
            <Text style={styles.titulo}>
              {dataAuto.marca} {dataAuto.modelo} - {dataAuto.version}
            </Text>
            <Text style={styles.subtitulo}>{dataAuto.tipo}</Text>
          </View>
          <View
            style={{
              marginTop: "10px",
              marginLeft: "25px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "#000000",
                borderRadius: "5px",
                width: "80px",
                padding: "8px",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "extrabold",
                }}
              >
                Venta
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                padding: "8px",
              }}
            >
              <Text
                style={{
                  fontSize: "13px",
                }}
              >
                {dataAuto.precio}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.imageSection}>
          <Image
            style={{ width: "350px" }}
            alt="bmw"
            src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
          />
        </View>
        <View style={styles.bodySection}>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              paddingBottom: "10px",
            }}
          >
            INFORMACIÓN BÁSICA
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "10px",
              width: "95%",
              borderBottom: "1px solid #000000",
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View
              style={{ display: "flex", flexDirection: "column", width: "27%" }}
            >
              <Text style={styles.textoCategorias}>
                Marca: {dataAuto.marca}
              </Text>
              <Text style={styles.textoCategorias}>
                Modelo: {dataAuto.modelo}
              </Text>
              <Text style={styles.textoCategorias}>Año: {dataAuto.año}</Text>
              <Text style={styles.textoCategorias}>
                Versión: {dataAuto.version}
              </Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "column", width: "28%" }}
            >
              <Text style={styles.textoCategorias}>
                Kilometraje: {dataAuto.kilometraje}
              </Text>
              <Text style={styles.textoCategorias}>
                Transmisión: {dataAuto.transmision}
              </Text>
              <Text style={styles.textoCategorias}>
                Puertas: {dataAuto.puertas}
              </Text>
              <Text style={styles.textoCategorias}>
                Motor: {dataAuto.motor}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "25px",
                width: "45%",
              }}
            >
              <Text style={styles.textoCategorias}>
                Tipo de combustible: {dataAuto.tipoCombustible}
              </Text>
              <Text style={styles.textoCategorias}>
                Acepta permuta: {dataAuto.permuta}
              </Text>
              <Text style={styles.textoCategorias}>HP: {dataAuto.HP}</Text>
              <Text style={styles.textoCategorias}>
                Ubicación: {dataAuto.ubicacion}
              </Text>
            </View>
          </View>
          <View style={{ height: "200px", width: "100%" }}>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                marginTop: "22px",
                paddingBottom: "10px",
              }}
            >
              ADICIONALES
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "10px",
                width: "95%",
                borderBottom: "1px solid #000000",
              }}
            ></View>
            <Text style={styles.textoCategorias}>{dataAuto.adicionales}</Text>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={{ marginLeft: "25px", marginTop: "22px" }}>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              paddingBottom: "10px",
            }}
          >
            FOTOS
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "10px",
              width: "95%",
              borderBottom: "1px solid #000000",
            }}
          ></View>
        </View>
        <View style={styles.imageSecSection}>
          <View
            style={{ display: "flex", flexDirection: "column", padding: "5px" }}
          >
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img1"
              // src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
              src="https://firebasestorage.googleapis.com/v0/b/onlevelcars.appspot.com/o/a3440891-9eaf-471a-8eb3-c54ff729c95e?alt=media&token=7f2e7f97-700e-4504-aa83-6a7eed5be6ff"
            // src={dataAuto.imagenes[0]}
            />
            {/* <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img2"
              src="https://fotos.jornaldocarro.estadao.com.br/uploads/2019/07/08131347/1a198549-2020-bmw-x6-28.jpg"
            // src={dataAuto.imagenes[1]}
            />
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img3"
              src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
            />
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img4"
              src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
            /> */}
          </View>
          {/* <View
            style={{ display: "flex", flexDirection: "column", padding: "5px" }}
          >
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img5"
              src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
            />
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img6"
              src="https://fotos.jornaldocarro.estadao.com.br/uploads/2019/07/08131347/1a198549-2020-bmw-x6-28.jpg"
            />
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img7"
              src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
            />
            <Image
              style={{ width: "250px", paddingBottom: "5px" }}
              alt="img8"
              src="https://1.bp.blogspot.com/-T5WCgYeOeqQ/YJ20y2trA2I/AAAAAAAAlHM/dg-DALt1emAlBiVe8x92hNLkKwDkwE5EwCLcBGAsYHQ/s16000/BMW-X6-M-Argentina.jpg"
            />
          </View> */}
        </View>
      </Page>
    </Document>
  );
}
