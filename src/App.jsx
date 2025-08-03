import React, { useEffect, useState } from 'react';
import './index.css'
import Textbg from './components/Textbg';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [wrong, setWrong] = useState(false);
    const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  function handleLogin() {
    const user = data.find(user => user.email === name);

    if (!user) {
      setWrong(true)
      return;
    }
    if (user.password === password) {
      setWrong(false)
      navigate('/new', { state: { user } })
    } else {
      setWrong(true)
    }
  }
  return (
    <>
    <div className='inputs'>
      <h1>Login</h1>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type user id"
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={wrong ?  "Wrong password/email" : "Type in Password"}
      />
      <button onClick={() => {
  handleLogin();
  setName('');
  setPassword('');
}}>Login</button>

    </div>
    <Textbg />
    </>
  );
};

export default App;
