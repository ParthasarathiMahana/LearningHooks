import React, {useState} from "react";

function App() {

  function useValues(initialValue){
    var[value, setValue] = useState(initialValue);

    function changeVal(e){
      setValue(e.target.value);
    }

    return{
      value,
      changeFunction: changeVal
    }
  }

  const name = useValues('');
  const email = useValues('');
  const password = useValues('');


  return (
    <div className="App">
        <input
        value = {name.value}
        onChange = {name.changeFunction}
      />
      <p>Name: {name.value}</p>

      <input
        value = {email.value}
        onChange = {email.changeFunction}
      />
      <p>Email: {email.value}</p>

      <input
        value = {password.value}
        onChange = {password.changeFunction}
      />
      <p>Password: {password.value}</p>
    </div>
  );
}

export default App;