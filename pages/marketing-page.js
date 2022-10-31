import { Template } from "../components/Template/Template";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Template>
        Default page without redirects
      </Template>
    </div>
  );
}