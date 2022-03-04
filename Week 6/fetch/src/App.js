import "./App.css";
import useFetch from "react-fetch-hook"
// import { useState, useEffect } from "react";

export default function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts?`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((actualData) => {
  //       setData(actualData);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

 
  
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  return (
    <div className="App">
      <h1>API Posts</h1>
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title, body }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p className="Pad">{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
