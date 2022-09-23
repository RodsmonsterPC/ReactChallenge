const GetPost = () => {
    const fetchData = () => {
    fetch("http://localhost:8080/post/")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => {
        setError(error.message);
      });
  };
};

