import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        Main container 
        - videoBackground
        - videotitle
        Secondary container
         - movielist *n
           - card * n

      */ }
    </div>
  );
};

export default Browse;

//why the api is called two times -> because of strict mode of react js this will only happen twice while developing not while production
//React does extra rendring for checking inconsistency happens