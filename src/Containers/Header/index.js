import { Box, Container, IconButton, InputBase } from "@mui/material";
import React from "react";
import { FlexBox } from "../../Components/Flexing";
import SearchIcon from "@mui/icons-material/Search";
import { HeaderWrapper } from "./HeaderWrapper";

export default function Header() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <HeaderWrapper>
      <Container>
        <FlexBox>
          <img src="/images/logo1.png" width="150px" />
          <Box
            component="form"
            sx={{
              borderRadius: 10,
              px:2,
              py:1,
              display: "flex",
              alignItems: "center",
              backgroundColor : "#F0F0F0",
              width: 200,
              height: 40,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidirish"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={handleChange}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </FlexBox>
      </Container>
    </HeaderWrapper>
  );
}
