import React from "react";
import Navbar from "./components/Navbar";
import CommunityPage from "./pages/CommunityPage";

import HeroPage from "./pages/HeroPage";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <CommunityPage />
    </>
  );
};

export default App;
