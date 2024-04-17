import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { paths } from "./data/constants";
import './App.css'

function App() {

  return (
    <div className="App">
    <Router>
        <Routes>
            <Route
                path={`${paths.root}`}
                element={
                    <HomePage
                    />
                }
            />
            {/* <Route
                path={`${paths.restaurants}`}
                element={
                    <RestaurantsPage />
                }
            /> */}
            {/* <Route
                path={`${paths.internalPage}`}
                element={
                    <InternalRestaurantPage />
                }
            /> */}
        </Routes>
    </Router>
    </div>
  )
}

export default App
