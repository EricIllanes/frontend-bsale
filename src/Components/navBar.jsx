import React from "react";
import {
  AppBar,
  Box,
  Button,
  Link,
} from "@mui/material";
import SearchBar from "./searchBar";
import logo from "../bsale-logo.png";

export default function NavBar() {
  return (
    <div>
      <AppBar
        sx={{
          display:'flex',
          background: "##188FD9",
          height: "150px",
          alignItems:'center'
        }}
      >
        <Box sx={{ position: "absolute", left: "1px" }}>
          <Link href="/" sx={{ textDecoration: "none" }}>
            <Button variant="text">
              <img src={logo} alt="imagenlogo" />
            </Button>
          </Link>
        </Box>
        <Box 
          sx={{
            display:'flex',
            alignContent: "center",
            justifyContent: "center",
            alignItems:'center',
            height:'150px'
          }}
        >
          <SearchBar />
        </Box>
      </AppBar>
    </div>
  );
}
