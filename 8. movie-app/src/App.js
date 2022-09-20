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
        <Route path="/movie/:movieId" element={<Detail />} /> {/* localhost:3000/movie/아무거나 라고 치면 Detail이 나온다 */}
        {/* /:id라고 해야한다, /id라고 하면 그냥 텍스트가 되어버려서 뒤에 /movie/id경로가 되어버림 */}
        {/* useParams를 써서 :id 값을 반환한다.(url뒤에 변경되는 값) */}
        <Route path="/" element={<Home />} /> {/* localhost:3000 에 나오는 가장 처음 화면 */}
        <Route path="/hello" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
