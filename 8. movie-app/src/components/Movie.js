import PropTypes from "prop-types"; // prop-types 설정

function Movie({ mediumCoverImage, title, summary, genres }) { // props들은 App.js에서 받아오는것들
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres ? genres.map((movieGenre) => <li key={movieGenre}>{movieGenre}</li>) : <li>no genre</li>}
      </ul>
    </div>
  );
}

// prop-types 설정
Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired // 배열검사 arrayOf()
}

export default Movie;