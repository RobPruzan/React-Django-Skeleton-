import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { useState } from 'react';


export const App = () => {
  const [djangoData, setDjangoData] = useState<string>('')

  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => setDjangoData(String(res.data)))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>helloo :p Django Data {djangoData}</h1>
    </div>
  );
}

export default App;
