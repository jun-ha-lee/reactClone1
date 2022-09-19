// react-router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Home.js import
import Home from "./routes/Home"

function App() {
  return (
    <Router>
      <Routes>{/* localhost:3000 뒤에 붙는 url을 찾는다 */}
        <Route path="/" element={<Home />}>
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
