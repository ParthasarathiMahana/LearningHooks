import React, {useState, useEffect} from "react";

function App() {
    var [userId, setId] = useState(1);
    const [data, setData] = useState('');

    useEffect(()=>{
        const url = `https://dummyjson.com/posts/${userId}`;

        fetch(url)
        .then((value)=>{ return value.json()})
        .then((data)=>{
            console.log(data);
            setData(data.title)
        })
    },[userId]);

    function increaseId(){
        var id2 = parseInt(userId)+1;
        userId = id2;
        setId(userId);
    }
  return (
    <div className="App">
      <p>Title: {data}</p>
      <button onClick={increaseId}>Increase Id value by 1</button>
    </div>
  );
}

export default App;