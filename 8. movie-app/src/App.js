// react-router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// 라우터 설치할때 꼭 npm install react-router-dom@6 해라

// Home.js import
import Home from "./routes/Home";
// Detail.js import
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>{/* localhost:3000 뒤에 붙는 url을 찾는다 */}
        <Route path="/movie" element={<Detail />} /> {/* localhost:3000/movie 라고 치면 Detail이 나온다 */}
        <Route path="/" element={<Home />} /> {/* localhost:3000 에 나오는 가장 처음 화면 */}
        <Route path="/hello" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
