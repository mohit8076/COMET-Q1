import "./App.css";
import useFetch from "react-fetch-hook";
// import { useState, useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(json => console.log(json))
  // fetch('https://jsonplaceholder.typicode.com/todos/5')
  //   .then(response => response.json())
  //   .then(json => console.log(json))


  
  // POST adds a random id to the object sent
  // fetch('https://jsonplaceholder.typicode.com/todos', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //           userId: 1,
  //           title: "clean room",
  //           completed: false
  //       }),
  //       headers: {
  //           "Content-type": "application/json; charset=UTF-8"
  //       }
  //   })
  //   .then(response => response.json())
  //   .then(json => console.log(json))



  // PUT to the resource with id = 5 to change the name of task
  // fetch('https://jsonplaceholder.typicode.com/todos/5', {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //           userId: 1,
  //           id: 5,
  //           title: "hello task",
  //           completed: false
  //       }),
  //       headers: {
  //           "Content-type": "application/json; charset=UTF-8"
  //       }
  //   })
  //   .then(response => response.json())
  //   .then(json => console.log(json))



  // DELETE task with id = 1
  // fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //   method: 'DELETE'
  // })
  // const { isLoading, data, error } = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts?_limit=10"
  // );



  // return (
  // <div className="App">
  //   <h1>API Posts</h1>
  //   {isLoading && <div>A moment please...</div>}
  //   {error && (
  //     <div>{`There is a problem fetching the post data - ${error}`}</div>
  //   )}
  //   <ul>
  //     {data &&
  //       data.map(({ id, title, body }) => (
  //         <li key={id}>
  //           <h3>{title}</h3>
  //           <p className="Pad">{body}</p>
  //         </li>
  //       ))}
  //   </ul>
  // </div>
  // );
}
