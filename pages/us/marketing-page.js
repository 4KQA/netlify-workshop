import Image from "next/image";
import { Template } from "../../components/Template/Template";
import styles from "../../styles/Home.module.css";
import background from "../../public/images/us-bg.jpeg";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    console.log(props, 'dsfd')
  }, [props])

  console.log(props, 'props')

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
