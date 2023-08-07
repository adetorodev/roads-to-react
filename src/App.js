import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://react.dev",
      author: "Ezekiel Adetoro",
      num_comments: 3,
      point: 4,
      objectID: 0,
    },
    {
      title: "Django",
      url: "https://djangoproject.orh",
      author: "Ezekiel Adetoro",
      num_comments: 2,
      point: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>My hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />

    </div>
  );
};

const List = ({ list }) =>
  list.map( item => <Item key={item.objectID} item={item} />)

  const Item = ({ 
    item: {
    title, url, author, num_comments, point
  }, 
}) => (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{point}</span>
    </div>
  )


const Search = ({ search, onSearch }) => {
  // const { search, onSearch } = props
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  );
}

export default App;
