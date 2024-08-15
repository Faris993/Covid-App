import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import CovidStats from "./Components/CovidStats/CovidStats";
import { About } from "./Components/About/About";
import CountryStats from "./Components/CountryStats/CountryStats";
import Footer from "./Components/Footer/Footer";
import { createGlobalStyle } from "styled-components";
import { MyDataProvider } from "./Context/Provider";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <MyDataProvider>
      <Router>
        <GlobalStyle />
        <MainContainer>
          <Navbar />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/covidstats" element={<CovidStats />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/countrystats" element={<CountryStats />} />
            </Routes>
          </Content>
          <Footer />
        </MainContainer>
      </Router>
    </MyDataProvider>
  );
}

export default App;
