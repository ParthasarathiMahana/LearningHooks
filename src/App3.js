import React, {useEffect, useState} from "react";

function App() {

  const[data, setData]=useState([]);
  var[userId, setId]=useState('1');

  function changeId(){
    userId += 1;
    setId(userId);
  }

  function resetId(){
    userId = 1;
    setId(userId);
  }

  useEffect(()=>{
    const url = `https://dummyjson.com/posts/${userId}`;

    fetch(url)
    .then((response)=>{return response.json()})
    .then((data)=>{
      console.log(data);
      setData(data);
    })

  },[userId]);

  return (
    <div className="App">
      <div>
        <p>post: {data.body}</p>
        <button onClick={changeId}>Increase UserId By 1</button>
        <button onClick={resetId}>Reset UserId</button>
      </div>
    </div>
  );
}

export default App;