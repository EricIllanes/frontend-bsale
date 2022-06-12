import { Typography, CardContent, Box, Card } from "@mui/material";

export default function CardProduct({
  id,
  name,
  image,
  price,
  discount,
  category,
}) {
  return (
    <Box>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      ></link>
      <Card
        sx={{
          width: 300,
          height: 500,
          display: "flex",
          margin: "10px 15px",
        }}
      >
        <CardContent sx={{ marginTop: "10px", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "125px",
            }}
          >
            <Typography variant="h3" fontFamily="Bebas Neue">
              {name}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "200px",
            }}
          >
            <img
              src={
                image
                  ? image
                  : "https://cdn-icons-png.flaticon.com/512/7687/7687461.png"
              }
              alt="imgproduct"
              width="50%"
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", minHeight: "100", marginTop:'20px' }}
          >
            <Typography variant="h5" fontFamily="Bebas Neue">
              Precio: ${price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              minHeight: "75px",
              justifyContent: "center",
              alignContent:"center",
              marginTop:'20px'
            }}
          >
            {discount ? (
              <Box
                sx={{
                  height:'40px',
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  background: "#de5500",
                  borderRadius: "5px",
                  border: "1px solid black",
                  alignItems:"center",
                }}
              >
                <Typography variant="h5" fontFamily="Bebas Neue">
                  {`DESCUENTO: ${discount}%`}
                </Typography>
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
