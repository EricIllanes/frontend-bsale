import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, getAllCategory, orderProduct } from "../Redux/action";
export const ASC = "ASC";
export const DESC = "DESC";
export default function FilterProduct() {
  const { category } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  function onSelectChange(event) {
    event.preventDefault();
    dispatch(filterProduct(event.target.value));
  }

  function onOrderSelectChange(event) {
    event.preventDefault();
    dispatch(orderProduct(event.target.value));
  }
  return (
    <Box sx={{ minWidth: 120, flexDirection:'column', justifyContent:'center' }}>
      <FormControl sx={{ width: "200px", marginBottom:'100px', marginTop:'50px', background:'white', borderRadius:'5px' }}>
        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
        <Select
        defaultValue=''
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Categoría"
          onChange={(e) => onSelectChange(e)}
        >
          <MenuItem value="all" name="all">
            Todos
          </MenuItem>
          {(category.length !==0) ?
            category.map((cat, index) => (
              <MenuItem key={index} name={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            )) : 'oe'}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "200px", marginBottom:'50px', background:'white', borderRadius:'5px'  }}>
        <InputLabel
        id="demo-simple-select-label">Ordenar</InputLabel>
        <Select
         defaultValue=''
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Ordenar"
          onChange={(e) => onOrderSelectChange(e)}
        >
          <MenuItem value={ASC}>A - Z</MenuItem>
          <MenuItem value={DESC}>Z - A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}