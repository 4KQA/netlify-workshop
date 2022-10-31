import Image from "next/image";
import { Template } from "../../components/Template/Template";
import styles from "../../styles/Home.module.css";
import background from "../../public/images/dk-bg.jpeg";
import { useEffect } from "react";

export default function Home({products, country}) {
  // useEffect(() => {country
  //   console.log(product, 'products')
  // }, [])

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
