import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // const baseURL = "https://randomuser.me/api";
  const [users,setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
        const response = await axios({
            method: 'get',
            url: `https://randomuser.me/api`
        });
        console.log("response >>",response.data.results);
        setUsers(response.data.results);
        localStorage.setItem('userDetails',JSON.stringify(response.data.results));
    }
    getUserData();
}, [])

const fetchUser = async () => {
      const response = await axios({
        method: 'get',
        url: `https://randomuser.me/api`
      });
      console.log("response >>",response.data.results);
      setUsers(response.data.results);
      localStorage.setItem('userDetails',JSON.stringify(response.data.results));
}

  return (
    <div className="App">
      {users[0].name.title}{users[0].name.first}{users[0].name.last}<br/>
      {users[0].email}<br/>
      <button onClick={fetchUser}>Refresh</button>
    </div>
  );
}

export default App;
