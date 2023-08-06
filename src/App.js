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

  const searchedStories = stories.filter( story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>My hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const List = (props) => {
  props.list.map(item => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.point}</span>
      </div>
    );
  });
};



const Search = props => {

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = event => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.handleSearch} />

      <p>
        {/* Searching for <strong>{searchTerm}</strong> */}
      </p>
    </div>
  )
}

export default App;
