import Pdf from "@/components/Pdf";
import CarTable from "@/components/Table";
import styles from "@/styles/Home.module.css";

function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
            {/* <CarTable/> */}
            <Pdf />
        </div>
      </main>
    </>
  );
}

export default Home;
