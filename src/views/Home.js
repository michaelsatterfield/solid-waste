import React, { useContext, useState } from "react";
import MyContext from "../state/MyContext";
import test_image from "../assets/test_image.png";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const context = useContext(MyContext);
  const [limiter, setLimiter] = useState(12);
  return (
    <div style={{ paddingTop: "34px", paddingBottom: "34px" }}>
      <SearchBar />
      <div className="popularCategories">
        <p className="popular_searches_text">Categories</p>
        {context.categories.length >= 12 ? (
          <Grid container spacing={7}>
            {context.categories.slice(0, limiter).map((cat) => {
              return (
                <Grid
                  className="category_card"
                  key={cat.name}
                  item
                  md={4}
                  lg={3}
                  xs={6}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`category/${cat.id}`}
                  >
                    <img
                      src={test_image}
                      className="category_image"
                      alt="category_image"
                    />
                    <p className="category_name">{cat.name}</p>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <p className="loadingText">Loading..</p>
        )}

        <p
          onClick={() => setLimiter(context.categories.length)}
          className="seeMoreBtn"
          style={{
            display: limiter === context.categories.length ? "none" : "block",
          }}
        >
          {context.categories.length >= 12 ? "See All" : ""}
        </p>
      </div>
    </div>
  );
}
