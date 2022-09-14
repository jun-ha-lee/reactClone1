import { useState, useEffect } from "react";

function App() {

  // 로딩만들기
  const [loading, setLoading] = useState(true);

  // API로 받아온 영화를 빈 배열에 넣기
  const [getApiMovie, setGetApiMovie] = useState([]);

  // async-await로 API받아오기
  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year');
    const json = await response.json();
    setGetApiMovie(json.data.movies);
    setLoading(false);
  }

  // API받기(한번만 실행)
  useEffect((func) => {
    getMovies()
  }, []);

  console.log(getApiMovie);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>{getApiMovie.map((m) => <div key={m.id}>
        <img src={m.medium_cover_image} alt={m.title} />
        <h2>{m.title}</h2>
        <p>{m.summary}</p>
        <ul>
          {m.genres ? m.genres.map((movieGenre) => <li key={movieGenre}>{movieGenre}</li>) : <li>no genre</li>}
        </ul>
      </div>)}</div>}
    </div>
  );
}

export default App;
