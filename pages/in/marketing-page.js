import React from 'react';
import Image from "next/image";
import { Template } from "../../components/Template/Template";
import styles from "../../styles/Home.module.css";
import background from "../../public/images/in-bg.jpeg";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";

export default function Home({products}) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if(!hydrated) {
    return null;
  }


  return (
    <div className={styles.container}>
      <Template>
        <Image src={background} alt="language background" fill style={{
              objectFit: "cover",
            }}/>
            <Hero products={products}/>
      </Template>
    </div>
  );
}
