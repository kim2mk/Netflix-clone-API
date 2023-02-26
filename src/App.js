import React from "react";
import './App.css';
import Row from "./components/Row";
import requests from './requests';
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Row 
        title='Netflix Originals' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title='Popular' fetchUrl={requests.fetchPopular}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Upcoming' fetchUrl={requests.fetchUpcoming}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
