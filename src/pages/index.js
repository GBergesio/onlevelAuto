import styles from "@/styles/Home.module.css";
import { Document, Page, PDFViewer, Text } from "@react-pdf/renderer";

function Home() {

  return (
    <>
      <main className={styles.main}>
        <div>
          <PDFViewer>
            <Document>
              <Page>
                <Text>Hola</Text>
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </main>
    </>
  );
}

export default Home