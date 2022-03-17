import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { FlexBox } from "../../Components/Flexing";
import { FooterWrapper } from "./FooterWrapper";

export default function Footer() {
  return (
    <Box sx={{backgroundColor : "#C4C4C4", py : 5}}>
        <Container>
                <Box sx={{  display: "flex",
                    justifyContent: "space-around",
                    flexDirection :"column",
                     alignItems: "center",}}>
                        <img src="/images/logo1.png" width="150"/>
                        <Typography component="h3" variant = "body2" sx={{py:2}}>
                           What are the most popular Universities in the world?
                        </Typography>
                        <Link href="https://www.algorismic.uz/">
                                <img src="/images/Algorismic.png" width="250"/>
                        </Link>
                </Box>
      </Container>
    </Box>
  );
}


{/* <FlexBox>
<img src="/images/logo.png" width="150px" />

<Link href="https://www.algorismic.uz/">
  <img
    src="https://www.algorismic.uz/images/algorismic-02.svg"
    width="150"
  />
</Link>
</FlexBox> */}