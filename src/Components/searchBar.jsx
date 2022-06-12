import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { searchProduct } from "../Redux/action";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  function onHandleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        size="large"
        className="searchInput"
        sx={{
          width: "350px",
          marginRight: "20px",
          background: "white",
          borderRadius: "5px",
        }}
        name="search"
        type="text"
        placeholder="Busca tu producto"
        value={search}
        onChange={(event) => onHandleChange(event)}
      />

      <Button
        size="large"
        sx={{
          backgroundColor: "#F2541B",
          "&:hover": { transform: "scale(1.19)" },
        }}
        variant="contained"
        startIcon={<Search />}
        onClick={() => {
          if (!search) {
            Swal.fire({
              title: "Por favor ingresa una búsqueda",
              text: "Por ej: Bebidas, Pisco, etc",
              imageUrl:
                "https://c.tenor.com/5ZGtek7vpqkAAAAC/party-celebration.gif",
              imageWidth: 190,
              imageAlt: "Custom image",
            });
          } else {
            if (search.length < 3) {
              Swal.fire({
                title:
                  "Por favor ingresa al menos tres (3) caracteres para tu búsqueda",
                text: "Por ej: ron",
                imageUrl:
                  "https://c.tenor.com/5ZGtek7vpqkAAAAC/party-celebration.gif",
                imageWidth: 190,
                imageAlt: "Custom image",
              });
            } else {
              dispatch(searchProduct(search));
              setSearch("");
              navigate("/result");
            }
          }
        }}
      >
        Buscar
      </Button>
    </Box>
  );
}
