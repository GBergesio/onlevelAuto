import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

export default function Pdf({ dataAuto, vendedor }) {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#333333",
      height: "10vh",
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
    },
    firstInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "100%",
      height: "10vh"
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
      marginTop: "10px",
      width: "100%",
      height: "40vh",
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
      paddingBottom: "5px",
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
      height: "30vh"
    },
    textoCategorias: {
      fontSize: "12px",
      paddingBottom: "6px",
    },
    textoCategoriasD: {
      fontSize: "12px",
      paddingBottom: "3px",
      paddingLeft: "15px",
    },
  });

  function formatPhoneNumber(number) {
    return "+54 9 " + number.substr(3, 2) + " " + number.substr(5, 4) + "-" + number.substr(9);
  }

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
                alt="onLevel"
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
              <Link style={styles.textHeader} src={`https://api.whatsapp.com/send?phone=${vendedor.telefono}`}>{formatPhoneNumber(vendedor.telefono)}</Link>
              <Text style={styles.textHeader}>{vendedor.nombre} {vendedor.apellido}</Text>
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
                  fontSize: "17px",
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}
              >
                U$s{dataAuto.precio}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.imageSection}>
          <Image
            style={{ marginLeft: "25px", marginRight: "25px" }}
            alt="imgPrincipal"
            src={dataAuto.imagenPrincipal}
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
                Marca:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.marca}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Modelo:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.modelo}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Año:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.año}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Versión:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.version}</Text>
              </Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "column", width: "28%" }}
            >
              <Text style={styles.textoCategorias}>
                Kilometraje:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.kilometraje}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Transmisión:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.transmision}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Puertas:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.puertas}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Motor:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.motor}</Text>
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
                Tipo de combustible:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.tipoCombustible}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Acepta permuta:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.permuta}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                HP:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.HP}</Text>
              </Text>
              <Text style={styles.textoCategorias}>
                Ubicación:&nbsp;
                <Text style={{
                  fontWeight: "ultrabold",
                  fontFamily: "Helvetica-Bold"
                }}>{dataAuto.ubicacion}</Text>
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
            <Text style={styles.textoCategorias}><Text style={{
              fontWeight: "ultrabold",
              fontFamily: "Helvetica-Bold"
            }}>{dataAuto.adicionales}</Text></Text>
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
            style={{ display: "flex", flexDirection: "row", padding: "5px", width: "100%", flexWrap: "wrap", gap: "10px", marginRight: "25px" }}
          >

            {dataAuto.imagenes !== [] ? (<>{dataAuto.imagenes.map((img, index) => (
              <Image
                style={{ paddingBottom: "5px", width: "50%", height: "22vh", padding: "5px" }}
                alt="imagenesAuto"
                key={index}
                src={img}
              />
            ))}</>) : <></>}
          </View>
        </View>
      </Page>
    </Document>
  );
}
