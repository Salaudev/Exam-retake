import {
  Container,
  Grid,
  Typography,
  Box,
  Skeleton,
  Button,
  IconButton,
  Tabs,
  Tab,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../../api";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import dataCategories from "./categories";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import {
  setCategory,
  setNewsByCategory,
} from "../../redux/actions/newsActions";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MainButton from "../../Components/Button";

export default function NewsRedux() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { category } = params;

  const { news, loading, error } = useSelector((state) => state.news);

  console.log(news);

  useEffect(() => {
    setNewsByCategory(category);
  }, [category]);

  const changeCategory = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  // Tab
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);
  const [uniks, setUniks] = useState(0);


  const [currentBooks, setCurrentBooks] = useState(news);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setbooksPerPage] = useState(9);

  useEffect(() => {
    setCurrentBooks(news);
  }, [news]);

  const indexOfLastOrder = currentPage * booksPerPage;
  const indexOfFirstOrder = indexOfLastOrder - booksPerPage;
  const presentBooks = news.slice(indexOfFirstOrder, indexOfLastOrder);
  const pageNumbers = Math.ceil(currentBooks.length / booksPerPage);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ py: 3, px: { xs: 4, sm: 6 } }}>
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        Universities
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ mx: "auto", display: "inline-block" ,   '& .css-1nh0a9x-MuiTabs-indicator': {opacity: 0,height : 0, display: "none !important"},
          '& .MuiTabs-indicator': {opacity: 0,height : 0, display: "none !important"}, }}
        >
      <Grid container>
              {dataCategories.map((item, index) => {
            return (
              <Grid item sx={6} md={4} >
                 <Tab
                  key={index}
                  onClick={() => changeCategory(item.toLowerCase())}
                  label={<MainButton text={item} bgColor="#067DC0" width="100%" fontSize="16px"/>}
                  {...a11yProps(index)}
                  sx={{ 
                    '& .css-1nh0a9x-MuiTabs-indicator': {opacity: 0,height : 0, display: "none !important"},
                    '& .MuiTabs-indicator': {opacity: 0,height : 0, display: "none !important"},
                  }}
                />
               </Grid>
            );
          })}
             
      </Grid>
        </Tabs>

        <Box sx={{ my: 4, flex: 1 }}>
          {error ? (
            <Typography color="error.main">Something went wrong</Typography>
          ) : (
            <>
            <Grid container spacing={3}>
              {loading
                ? dataCategories.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={300}
                        sx={{ borderRadius: 2 }}
                      />
                      <Skeleton
                        variant="text"
                        height={60}
                        sx={{ borderRadius: 2 }}
                      />
                    </Grid>
                  ))
                : presentBooks.map((item, index) => (
                    <Grid
                      key={item.name}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Paper
                        sx={{
                          height: "250px",
                          background: "white",
                          padding: "30px",
                        }}
                      >
                        <Box sx={{display:"flex", justifyContent:"space-between", flexDirection : "column"}}>
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "start",
                            }}
                          >
                            <IconButton>
                              <TravelExploreIcon />
                            </IconButton>
                            <span>Country: {item.country}</span>
                          </Typography>

                    
                          <Typography
                            sx={{
                              // py: 3,
                              // px: 2,
                              fontSize: { xs: "16px", sm: "18px" },
                              fontWeight: "bold",
                            }}
                          >
                            {item.name}
                          </Typography>


                         <a style={{textDecoration : "none", color : "#000"}} href={item.domains[0]}>
                         <Typography
                            sx={{
                              py:3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "start",
                            }}
                          >
                            <IconButton>
                              <TravelExploreIcon />
                            </IconButton>
                            <span> {item.domains[0]}</span>
                          </Typography>

                         </a>

                        </Box>
                        <Typography
                          component={"p"}
                          variant="body1"
                        ></Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <MainButton px={1} py={1} bgColor="rgb(36, 153, 239)" text={ <a
                              style={{ textDecoration: "none", color: "white" }}
                              href={item.web_pages}
                            >
                              Go to Website
                            </a>}/>

                            <MainButton px={4} py={1} bgColor="rgb(36, 153, 239)" text={item.alpha_two_code}/>

                        </Box>
                      </Paper>
                    </Grid>
                  ))}
            </Grid>
              <Pagination
              sx={{py:5}}
              onChange={(e, page) => setCurrentPage(page)}
              variant="outlined"
              count={pageNumbers}
            />
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}

{
  /* <Box sx={{ width: 220, overflow: "hidden", mr: 2 }}>
          <List>
            {dataCategories.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => changeCategory(item.toLowerCase())}
                >
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box> */
}
