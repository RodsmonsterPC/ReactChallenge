const Login = () => {
  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => {
        setError(error.message);
      });
  };
};
