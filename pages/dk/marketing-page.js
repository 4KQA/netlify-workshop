import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import background from "../../public/images/dk-bg.jpeg";
import Hero from "../../components/Hero/Hero";
import { Template } from "../../components/Template/Template";

export default function Home({products, country}) {
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
        <Hero products={products} />
      </Template>
    </div>
  );
}
