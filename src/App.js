import './App.css';
import React, { useState , useEffect} from 'react';


export default function App() {


  const [details, setDetails] = useState([]);

    useEffect(() => {
        async function blah() {
            let data = await fetch('https://api.themoviedb.org/3/movie/550?api_key=8a4a67f63953a2afa86c2fb2a94f6f1e')
            let res = await data.json()
            setDetails(res)
            // console.log(details.genres[0].name);
        }
        blah()
    }, [])


  return (
    <div className="App">
      <h1>hallo version 2 !!! mordi levi mannnnnnn</h1>
      <h2>boom</h2>
    
    </div>
  );
}


