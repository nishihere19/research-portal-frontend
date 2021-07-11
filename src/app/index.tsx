import React from "react";
import "tailwindcss/tailwind.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import SideBarMob from "./components/SideBarMob/SideBarMob";
import { useState } from "react";
import Home from "./components/Home";
import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(126, 7, 7, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c729298b;
    border-radius: 4px;
  }
`;

const App = () => {
  const [state, setState] = useState("none");
  const [mobState, setMobState] = useState("none");
  const [hamburger, setHamburger] = useState("block");

  const closeSideBar = () => {
    if (state === "block") setState("none");
    if (mobState === "block") setState("none");
    setHamburger("block");
  };
  const toggleSideBar = () => {
    setState("block");
    setHamburger("none");
  };

  const toggleSideBarMobile = () => {
    if (mobState === "none") {
      setMobState("block");
    } else {
      setMobState("none");
    }
  };

  const NavigationBar = () => {
    return (
      <div className="flex">
        <div className="flex-1">
          <NavBar
            toggleSideBar={toggleSideBar}
            toggleSideBarMobile={toggleSideBarMobile}
            hamburger={hamburger}
          ></NavBar>
          <div style={{height:'88vh'}}>
            <Container className='h-full overflow-y-scroll'>
              {/* Mobile Side Bar */}
              <div style={{ display: mobState }}>
                <SideBarMob></SideBarMob>
              </div>
              <Home />
            </Container>
          </div>
        </div>
        <div style={{ display: state }}>
          <SideBar closeSideBar={closeSideBar}></SideBar>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavigationBar />
    </div>
  );
};

export default App;
