import Image from "next/image";
import { Template } from "../../components/Template/Template";
import styles from "../../styles/Home.module.css";
import background from "../../public/images/us-bg.jpeg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Template>
        <Image src={background} alt="language background" fill style={{
              objectFit: "cover",
            }}/>
      </Template>
    </div>
  );
}