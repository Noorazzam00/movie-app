import "./App.css";
import Movies from "./component/list"
import {Route, Routes} from 'react-router-dom'
import MovieCard from "./component/moviecards";
import DesCard from "./component/DesCard";


function App() {
  // console.log("object");
  return (
    <Routes>
      <Route path="/" element={<MovieCard/>}/>
      <Route path=":id" element={<DesCardd/>}/>
    </Routes>
  );
}

export default App;