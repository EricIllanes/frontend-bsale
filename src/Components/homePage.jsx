import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/action";
import CardProduct from "./cardProduct";
import {Card, Grid, Box, Pagination } from "@mui/material";
import NavBar from "./navBar";
import FilterProduct from "./filterProduct";
import usePagination from "./paginationCard";

export default function HomePage() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const productToShow = products;

  const [page, setPage] = useState(1);
  const PORPAGE = 8;

  const count = Math.ceil(productToShow.length / PORPAGE);
  const datos = usePagination(productToShow, PORPAGE);

  function onHandleChange(event, p) {
    setPage(p);
    datos.jump(p);
  }

  return (
    <div style={{ marginTop: "180px", display: "flex"}}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          left: "10px",
          flexDirection:'start',
          minHeight:'100vh'
        }}
      >
        <Box sx={{ width: "20vw" }}>
          <Card
            sx={{
              width: 250,
              height: 310,
              display: "flex",
              margin: "10px 15px",
              background: "#F2541B",
              border: "1px solid black",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FilterProduct />
          </Card>
        </Box>

        <Box sx={{ width: "80vw", justifyContent:'center', alignContent:'center' }}>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              alignContent: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {datos.length!==0 ?
              datos.currentProductsToShow().map((e, index) => (
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
            : <></>}
          </Box>

          <Pagination shape="rounded" count={count} page={page} onChange={onHandleChange} size="large" variant="outlined" sx={{display:'flex', justifyContent:"center"}}/>
        </Box>
      </Box>
    </div>
  );
}
