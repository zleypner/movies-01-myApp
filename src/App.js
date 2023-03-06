import {BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MovieDetails from "./pages/MovieDetails";
import styles from "./App.module.css";

 function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}>
          </Route>          
          <Route path="/" element={<LandingPage/>}>      
          </Route>
          

        </Routes>
      </main>
    </Router>
  );
}

export default App;