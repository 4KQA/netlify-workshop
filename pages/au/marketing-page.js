import { useEffect } from "react";
import Image from "next/image";
import { Template } from "../../components/Template/Template";
import styles from "../../styles/Home.module.css";
import background from "../../public/images/au-bg.jpeg";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Template>
        <Image src={background} alt="language background" fill style={{
          objectFit: "cover",
        }}/>
      <Hero />
      </Template>
    </div>
  );
}
