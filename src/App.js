import List from "./List";
import React, {useState} from "react";

const initialState = [
  {id:1, name:'Luis Diaz'},
  {id:2, name:'Maria Carmen'}
]
function App() {
  const [users, setUsers] = useState(initialState);
  const [text, setText] = useState('New');
  React.useEffect(()=>{
    console.log('App render')
  })

  const handleAdd = ()=>{
      const newUser = { id: Date.now(), name:text}
      setUsers([...users, newUser])
  }

  return (
    <>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
    <List users={users}></List>
    <button onClick={handleAdd}>add</button>
    </>
  );
}

export default App;
