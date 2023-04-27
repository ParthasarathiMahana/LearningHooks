import React, {useState} from "react";

function App() {

  const emailState = useState('');
  const email = emailState[0];
  const setEmail = emailState[1];

  function handleChange(e){
    setEmail(e.target.value);
  }

  return (
    <div className="App">
      <input
        value = {email}
        onChange = {handleChange}
      />
      <p>Email: {email}</p>
    </div>
  );
}

export default App;