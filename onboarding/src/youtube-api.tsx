export type Data = {
  method?: string;
  url?: string;
  params?: string;
  headers?: string;
};

// const options = {
//   method: "GET",
//   url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
//   params: { q: "web+development" },
//   headers: {
//     "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
//     "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
//   },
// };

// axios
//   .request<Data>(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//sample results
// {15 items
//     "type":"video"
//     "title":"Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka"
//     "id":"Q33KBiDriJY"
//     "url":"https://www.youtube.com/watch?v=Q33KBiDriJY"
//     "bestThumbnail":{...}3 items
//     "thumbnails":[...]2 items
//     "isUpcoming":false
//     "upcoming":NULL
//     "isLive":false
//     "badges":[...]1 item
//     "author":{...}7 items
//     "description":NULL
//     "views":3609058
//     "duration":"10:20:22"
//     "uploadedAt":"2 years ago"
//     }
