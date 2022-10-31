import { LogoIcon } from "../../assets/icons/Logo";
import { useState } from "react";
import PropTypes from "prop-types";
import { FavoriteEmptyIcon } from "../../assets/icons/FavoriteEmpty";
import { FavoriteFilledIcon } from "../../assets/icons/FavoriteFilled";

// utils/contentful
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export async function fetchContent(query) {
  // add a try / catch loop for nicer error handling
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        // throw our query (a string) into the body directly
        body: JSON.stringify({ query }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    // add a descriptive error message first,
    // so we know which GraphQL query caused the issue
    console.error(
      `There was a problem retrieving entries with the query ${query}`
    );
    console.error(error);
  }
}

export const getStaticPaths = async () => {
  const res = await fetch("https://api.npoint.io/5e62657c91bdf48206a9");
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
  const response = await fetchContent(`
    {
      heroCollection {
        items {
          headline
          image{url}
        }
      }
    }
    `);

  const res = await fetch("https://api.npoint.io/5e62657c91bdf48206a9");
  const articles = await res.json();
  const article = articles.find((i) => (params.article === i.slug ? i : null));

  return {
    props: {
      article,
      heros: response.heroCollection.items,
    },
  };
};

const Article = ({ article, heros }) => {
  console.log(heros);

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
        display: "flex",
        backgroundColor: article.color,
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
        ></p>

        <h2>{heros[0].headline}</h2>

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
            backgroundColor: article.color,
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
