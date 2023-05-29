import{ BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import MyList from "./pages/MyList";
// import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<Netflix/>}/>
        <Route exact path="/player" element={<Player/>}/>
        <Route exact path="/movies" element={<Movies/>}/>
        <Route exact path="/tv" element={<TvShows/>}/>
        <Route exact path="/myList" element={<MyList/>}/>
        {/* <Route exact path="/*" element={<NotFound/>}/> */}
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
