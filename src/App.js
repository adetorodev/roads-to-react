import logo from './logo.svg';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://react.dev',
    author: 'Ezekiel Adetoro',
    num_comments: 3,
    point: 4,
    objectID: 0
  },
  {
    title: 'Django',
    url: 'https://djangoproject.orh',
    author: 'Ezekiel Adetoro',
    num_comments: 2,
    point: 5,
    objectID: 1
  }
]

const App = () => {
  // const welcome = {
  //   greeting: 'Hey',
  //   title: 'React',
  // };
  return (
    <div>
      <h1>
        My hacker Stories
      </h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

      <hr />

      <List />
    </div>
  )
  }

  const List = () => {
    return list.map(function(item){
      return(
        <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.point}</span>
          </div>
      )
    })
  }

export default App;
