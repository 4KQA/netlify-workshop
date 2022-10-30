import { LogoIcon } from "../../assets/icons/Logo";
import { useState } from "react";
import PropTypes from "prop-types";
import { FavoriteEmptyIcon } from "../../assets/icons/FavoriteEmpty";
import { FavoriteFilledIcon } from "../../assets/icons/FavoriteFilled";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://b41a37b4-2c62-48d7-a226-2c9c8db341ad.mock.pstmn.io/articlesTest55"
  );
  const articles = await res.json();
  const paths = articles.map((article) => {
    return { params: { article: article.slug.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    "https://b41a37b4-2c62-48d7-a226-2c9c8db341ad.mock.pstmn.io/articlesTest55/"
  );
  const articles = await res.json();
  const article = articles.find((i) => (params.article === i.slug ? i : null));
  return { props: { article } };
};

const Article = ({ article }) => {
  // Move personalisation logic to its own component
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: article.color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "100px",
          borderRadius: "5px",
        }}
      >
        <LogoIcon width="5vw" height="100%" />
        <br />
        <p
          style={{
            color: "black",
          }}
        >
          {article.title}
        </p>
        <p
          style={{
            color: "black",
          }}
        >
          {article.subtitle}
        </p>

        <button
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            width: "30px",
            height: "30px",
            backgroundColor: "transparent",
            padding: "0",
            fontSize: "inital",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => toggleFavorite()}
        >
          {isFavorite ? (
            <FavoriteFilledIcon width="100%" height="100%" />
          ) : (
            <FavoriteEmptyIcon width="100%" height="100%" />
          )}
        </button>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  article: PropTypes.object,
};

export default Article;
