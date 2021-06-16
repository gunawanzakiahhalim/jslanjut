$.ajax({
  url: "http://www.omdbapi.com/?apikey=6caddc47&s=avengers",
  success: (result) => {
    const movies = result.Search;
    console.log(movies);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
