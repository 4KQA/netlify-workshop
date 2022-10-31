import { FavoriteEmptyIcon } from "../../assets/icons/FavoriteEmpty";
import { FavoriteFilledIcon } from "../../assets/icons/FavoriteFilled";
import { LogoIcon } from "../../assets/icons/Logo";
import Carousel from "framer-motion-carousel";
import Link from "next/link";
import { useState, useEffect } from "react";

export function CarouselContainer() {
  // Move personalisation logic to its own component
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const handleFetch = () => {
      fetch("https://api.npoint.io/5e62657c91bdf48206a9")
        .then((response) => response.json())
        .then((data) => setArticles(data));
    };
    handleFetch();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel loop={true} autoPlay={true} interval={60000}>
        {articles?.length !== 0 &&
          articles.map((item, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: item.color,
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
                  {item.title}
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  {item.subtitle}
                </p>
                <Link
                  key={item.slug}
                  href={`/articles/${encodeURIComponent(item.slug)}`}
                  style={{
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  Show me the life in <b>{item.color}</b>
                </Link>

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
          ))}
      </Carousel>
    </div>
  );
}
