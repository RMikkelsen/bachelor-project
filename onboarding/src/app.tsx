import "./app.css";
import Contacts from "./components/contacts";
import LinkList from "./components/link-list";
import YouTube from "./components/youtube-main";

function App() {
  return (
    <div className="App">
      <h1>Learning Portal</h1>
      <span className="blocks">
        <Contacts />
        <YouTube />
        <LinkList />
      </span>
    </div>
  );
}

export default App;
