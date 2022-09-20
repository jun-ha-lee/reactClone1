import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom"; // url에 있는 값을 반환해 주는 함수사용
import styles from "./Detail.module.css";

function Detail() {
  const { movieId } = useParams(); // /movie/:id, id값이 넘어온다
  // console.log(movieId);

  // 로딩만들기
  const [loading, setLoading] = useState(true);

  // api를 통해 받아온 영화에 대한 정보를 담기
  const [getApiMovieDetail, setGetApiMovieDetail] = useState([]);

  // id로 영화에 관련한 내용을 api를 통하여 받아온다
  const getMoviesDetail = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
    const json = await response.json();
    console.log(json);
    setGetApiMovieDetail(json.data.movie); // json에 담긴 영화에 대한 정보를 빈배열에 넣어둔다
    setLoading(false); // api를 통해 영화정보를 다 받아오면 로딩을 끝낸다
  };

  console.log(getApiMovieDetail);

  // api받아오는것은 한번만 실행
  useEffect(() => {
    getMoviesDetail();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : ''}
      <div className={styles.background} style={{ background: `url(${getApiMovieDetail.background_image})` }}>
        <img src={getApiMovieDetail.large_cover_image} alt={getApiMovieDetail.title} />
        <div className={styles.content}>
          <h1>Title: {getApiMovieDetail.title}</h1>
          <h2>
            <ul>
              Genre: {getApiMovieDetail.genres ? getApiMovieDetail.genres.map((genre) => <li key={genre}>{genre}</li>) : 'no genres'}
            </ul>
          </h2>
          <h2>Rating: {getApiMovieDetail.rating}</h2>
          <h2>Description: {getApiMovieDetail.description_full}</h2>
        </div>
      </div>
    </div>
  );

}

export default Detail;