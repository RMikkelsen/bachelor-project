import "./app.css";
import Contacts from "./components/contact/contacts";
import LinkList from "./components/list/link-list";
import YouTubeData from "./components/youtube/youtube-api";

import YouTube from "./components/youtube/youtube-main";
import YouTubeSearch from "./components/youtube/youtube-searchbar";

function App() {
  return (
    <div className="App">
      <h1>Learning Portal</h1>
      <span className="blocks">
        <Contacts />
        {/* <YouTube /> */}
        <YouTubeSearch />
        <YouTubeData />
        <LinkList />
      </span>
    </div>
  );
}

export default App;
