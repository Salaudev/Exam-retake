import { Box, Container, Typography } from "@mui/material";
import React from "react";
import MainButton from "../../Components/Button";

export default function Section() {
  return (
    <Box
      variant="section"
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "90vh",
        backgroundSize: "cover",
        color: "white",
        backgroundImage: `url(/images/back.png)`,
        objectFit:"cover"
      }}
    >
    
      <Container>
        <Typography
        component="h1"
        sx={{
          fontSize: {xs : 24, sm:40 , md : 70 , lg:100},
          fontWeight:"bold",
        }}
      >
       Top Universities
        </Typography>
        <Typography varinat="h1" component="h2" sx={{    fontSize: {xs : 14, sm:18 , md : 25 , lg:40}, py:2}}>
        What are the most popular Universities in the world?
        </Typography>
        <MainButton text="Goo to See" sx={{ backgroundColor: "#001C3D !important" ,color: "#fff",py:2, "&:hover" :{ backgroundColor : "#001C3D" }  }}/>
      </Container>
    </Box>
  );
}
