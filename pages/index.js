import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AvatarCreator } from "../components/AvatarCreator/AvatarCreator";

const fetchAvatarSrc = (avatar) => {
  const params = Object.entries(avatar).map(
    ([key, value]) => `${key}=${value}`
  );
  const searchParams = params.join("&");
  const avatarUrl = `https://avataaars.io/?${searchParams}`;
  return avatarUrl;
};

export default function Home({ header, ...props }) {
  const [headerText, setHeaderText] = useState(header);
  const [colorScheme, setColorScheme] = useState(props.colorScheme);
  const [avatarSrc, setAvatarSrc] = useState(props.avatarSrc);

  const [avatar, setAvatar] = useState({
    avatar: props.avatar,
    user: {
      name: header,
    },
    preferences: {
      colorScheme: props.colorScheme,
    },
  });

  useEffect(() => {
    Cookies.set("avatar", JSON.stringify(avatar));

    setAvatarSrc(fetchAvatarSrc(avatar.avatar));
  }, [avatar]);

  const handleSavePreferences = (e) => {
    e.preventDefault();
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
  };

  const color =
    props.colorScheme === "white" ||
    props.colorScheme === "lavender" ||
    props.colorScheme === "cornsilk" ||
    props.colorScheme === "aquamarine"
      ? "black"
      : "white";

  return (
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

      <p>current header: {headerText}</p>
      <p>current avartar color: {colorScheme}</p>

      <div>
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

      <AvatarCreator setAvatar={setAvatar} />
      {/* <Image
                alt="avatar"
                src={decodeURIComponent(props.avatarSrc)}
                layout="responsive"
                width={100}
                height={100}
            /> */}
      <img alt="avatar" src={avatarSrc} id="avatar" />
    </div>
  );
}

export const getStaticProps = (context) => {
  return {
    props: {
      header: "default from getStaticProps",
      colorScheme: "white",
      avatarSrc: "",
      avatar: {},
    },
  };
};
