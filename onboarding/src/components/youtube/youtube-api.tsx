import axios from "axios";

export const API = {
  getData: () =>
    axios({
      method: "GET",
      url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
      },
      params: { q: "web+development" },
    }),
};

// const options = {
//     method: "GET",
//     url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
//     params: { q: "web+development" },
//     headers: {
//       "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
//       "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
