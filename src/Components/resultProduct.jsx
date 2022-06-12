import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import CardProduct from "./cardProduct";
import NavBar from "./navBar";
import { cleanSearch } from "../Redux/action";
export default function ResultProduct() {
  const { results, isFound } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cleanSearch());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "180px" }}>
     <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {(results.length !== 0 && !isFound) ? (
          results.map((e, index) => (
            <Grid key={index}>
              <CardProduct
                id={e.id}
                name={e.name}
                price={e.price}
                discount={e.discount}
                image={e.url_image}
                category={e.categories.name}
              />
            </Grid>  
          ))
        ) : !isFound ? (
          <img
            src="https://media.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif"
            alt="imgloading"
          />
        ) : (
          <Box>
            <img
              src="https://c.tenor.com/yGOEI_Z1jPYAAAAi/dinosandcomics-dinosaur.gif"
              alt="imgnotfound"
              width={200}
              style={{ marginTop: 50 }}
            />
            <Typography fontFamily='Courgette'>
              No hemos encontrado tu producto, por favor intenta con otra
              búsqueda
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
}
