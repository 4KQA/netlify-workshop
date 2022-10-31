import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home({ header, ...props }) {
  const [headerText, setHeaderText] = useState(header);
  const [colorScheme, setColorScheme] = useState(props.colorScheme);
  const [cookiesconsent, setCookiesConsent] = useState(props.consent);
  const [avatar, setAvatar] = useState({
    avatar: {
      name: "",
      img: "",
    },
    user: {
      name: header,
    },
    preferences: {
      colorScheme: props.colorScheme,
    },
  });

  useEffect(() => {
    Cookies.set("avatar", JSON.stringify(avatar));
  }, [avatar]);

  const handleSavePreferences = (e) => {
    setAvatar((v) => {
      return {
        ...v,
        user: {
          ...v.user,
          name: headerText,
        },
        preferences: {
          ...v.preferences,
          colorScheme,
        },
      };
    });
    setCookiesConsent(true);
  };

  const color =
    colorScheme === "white" ||
    colorScheme === "lavender" ||
    colorScheme === "cornsilk" ||
    colorScheme === "aquamarine"
      ? "black"
      : "white";

  return (
    <>
      <div
        className={styles.container}
        style={{
          color,
          background: colorScheme,
        }}
      >
        <Head>
          <title>Netlify personalization</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 id="header">{headerText}</h1>

        <p>
          current header: <span>{headerText}</span>
        </p>
        <p>
          current avartar color: <span>{colorScheme}</span>
        </p>
      </div>

      {!cookiesconsent && (
        <div id="cookie-banner">
          <form>
            <input
              type="text"
              id="headerText"
              onChange={(e) => setHeaderText(e.target.value)}
            />
            <div>
              <input
                type="radio"
                name="avatar"
                id="color1"
                value="aquamarine"
                onChange={(e) => setColorScheme(e.target.value)}
              />
              <label htmlFor="color1">aquamarine</label>
            </div>
            <div>
              <input
                type="radio"
                name="avatar"
                id="color2"
                value="firebrick"
                onChange={(e) => setColorScheme(e.target.value)}
              />
              <label htmlFor="color2">firebrick</label>
            </div>
            <div>
              <input
                type="radio"
                name="avatar"
                id="color3"
                value="cornsilk"
                onChange={(e) => setColorScheme(e.target.value)}
              />
              <label htmlFor="color3">cornsilk</label>
            </div>
            <div>
              <input
                type="radio"
                name="avatar"
                id="color4"
                value="lavender"
                onChange={(e) => setColorScheme(e.target.value)}
              />
              <label htmlFor="color4">lavender</label>
            </div>
            <div>
              <input
                type="radio"
                name="avatar"
                id="color5"
                value="tomato"
                onChange={(e) => setColorScheme(e.target.value)}
              />
              <label htmlFor="color5">tomato</label>
            </div>
          </form>
          <button type="button" onClick={handleSavePreferences}>
            Set preferences
          </button>
        </div>
      )}
    </>
  );
}

export const getStaticProps = (context) => {
  return {
    props: {
      header: "default from getStaticProps",
      colorScheme: "white",
    },
  };
};
