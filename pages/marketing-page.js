import Hero from "../components/Hero/Hero";
import { Template } from "../components/Template/Template";
import styles from "../styles/Home.module.css";

export default function Home({ country }) {
  return (
    <div className={styles.container}>
      <Template>
        Default page without redirects - {country}
      </Template>
    </div>
  );
}
