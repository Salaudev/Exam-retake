import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainButton from "../../Components/Button";
import { setUniksByCountry } from "../../redux/actions";

export default function MainSection() {


    const navigate = useNavigate();
    const params = useParams();
  
    const { country } = params;
  
    const { uniks, loading, error } = useSelector((state) => state.uniks);

    useEffect(() => {
        setUniksByCountry(country)
    } ,[country])


  return (

      <Container>
        <Typography
        component="h1"
        sx={{
          fontSize: 100,
          fontWeight:"bold"
        }}
      >
       Top Universities
        </Typography>
        <Typography varinat="h1" component="h2" sx={{fontSize :"30px" , py:2}}>
        What are the most popular Universities in the world?
        </Typography>
        <MainButton text="Goo to See" sx={{backgroundColor : "#001C3D" ,color: "#fff",py:2, "&:hover" :{ backgroundColor : "#001C3D" }  }}/>
      </Container>
  );
}
