import { useState, useEffect } from "react";
import Movie from "../components/Movie"; // Movie.js컴포넌트 임포트

function Home() {
  // 로딩만들기
  const [loading, setLoading] = useState(true);

  // API로 받아온 영화를 빈 배열에 넣기
  const [getApiMovie, setGetApiMovie] = useState([]);

  // async-await로 API받아오기
  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year');
    const json = await response.json();
    setGetApiMovie(json.data.movies); // 영화데이터를 빈배열에 넣음
    setLoading(false); // 로딩 끝
  }

  // API받기(한번만 실행)
  useEffect((func) => {
    getMovies()
  }, []);

  console.log(getApiMovie);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>
        {getApiMovie.map((m) =>
          <Movie key={m.id} mediumCoverImage={m.medium_cover_image} title={m.title} summary={m.summary} genres={m.genres} />)}
        {/* key는 리액트에서만 map안에서 컴포넌트를 랜더링할때 사용하므로 넣어줘야 함 */}
      </div>}
    </div>
  );
}

export default Home;
