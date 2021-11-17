// import axios from "axios";

// export default async function searchYouTube(q: string | number | boolean) {
//   const config = {
//     headers: {
//       "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
//       "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
//     },
//   };
//   axios
//     .get("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q)
//     .then((response) => {
//       console.log(response.data);
//     });

// }

export default async function searchYouTube(q: string | number | boolean) {
  //   q = encodeURIComponent(q);
  const response = await fetch(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
      },
    }
  );
  const body = await response.json();
  console.log(body);
  return body.items.filter((item: { type: string }) => item.type === "video");
}
