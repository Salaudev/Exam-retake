import { Box, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Containers/Header";
import Section from "./Containers/Section";
import Footer from "./Containers/Footer";
import News from "./pages/News";
import NewsRedux from "./pages/NewsRedux";
import store from "./redux/store";
import ThemeContext from "./Theme/ThemeContext";

function App() {
  return (
    <ThemeProvider theme={ThemeContext("light")}>
      <Provider store={store}>
        <BrowserRouter>
          <Box sx={{maxWidth: '1920px', margin: '0 auto', background: '#E3E3E3'}}>
            <Header/>
            <Section/>
            <Routes>
              <Route path="/" element={<Navigate to={"/category/all"} />} />
              <Route path="/category/:category" element={<NewsRedux />} />
              <Route path="/category/:category/:id" element={<NewsRedux />} />
            </Routes>
            <Footer/>
          </Box>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
