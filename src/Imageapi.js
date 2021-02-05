import './App.css';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Imageapi() {
  
  const [pics, setpics] = useState(null);
  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos'
    );

    setpics(response.data);
  };
  
  return (
    <div className="app">
      <h1>Displaying Images in cards</h1>
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>
      <div className="pics">
        {pics &&
          pics.map((pic, index) => {
            return (
              <div className="pic" key={index}>
                <h3>Picture {index + 1}</h3>
                <h2>{pic.title}</h2>

                <div className="details">
                  <img src={pic.url} alt="API IMAGE" />
                  <img src={pic.thumbnailUrl} alt="API IMAGE"/>
                  <p>ALBUM: {pic.albumId}</p>
                </div>
              </div>
            );
          }
          )
        }
      </div>
          
     

      </div>
  )
}

export default Imageapi;