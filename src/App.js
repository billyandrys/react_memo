import List from "./List";
import React, {useState, useMemo} from "react";

const initialState = [
  {id:1, name:'Luis Diaz'},
  {id:2, name:'Maria Carmen'}
]
function App() {
  const [users, setUsers] = useState(initialState);
  const [text, setText] = useState('');
  const [ search, setSearch] = useState('')
  React.useEffect(()=>{
    console.log('App render')
  })

  const handleAdd = ()=>{
      const newUser = { id: Date.now(), name:text}
      setUsers([...users, newUser])
  }
  const handleSearch =()=>{
    setSearch(text) 
  }

  const filteredUser = useMemo(()=>
    users.filter(user=>{
        return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  , [users, search])
      
  
  return (
    <>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
    <List users={filteredUser}></List>
    <button onClick={handleAdd}>add</button>
    <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default App;
