import { Template } from "../components/Template/Template";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Template>Some other contry without redirect</Template>
    </div>
  );
}
