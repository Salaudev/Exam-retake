import { Box, Button } from "@mui/material";

export default function MainButton ({text,px=8,py=2, onClick,width, bgColor="#001C3D",children, fontSize="16px" ,...props}) {
    return (
        <Box
        component="button"
        onClick={onClick}
        sx={{
          width:{width},
          borderRadius: 10,
          px:px,
          py:py,
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          backgroundColor : bgColor,
          color:"#fff !important",
          fontSize:fontSize,
          height: 40,
        }}
      >
          {text}
      </Box>
    )
}