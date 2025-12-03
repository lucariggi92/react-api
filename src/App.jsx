import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  let [dati, setDati] = useState([])


  //FETCHING DEI DATI
  function fetchDati() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then(
      (resp) => {
        setDati(resp.data); //data è l'oggetto 
      }).catch(err => console.log("ERRORE:", err));
  }

  useEffect(fetchDati, []); //fetchdati solo al primo rendering





  return (
    <>
      <header className='bg-warning py-2'><div className='container'> <h1>Lista Attori</h1></div></header>


      <div className="container text-center">
        <div className="row">


            {dati.map((oggetto, index) => (
                        <div className="col" key={oggetto.id}>
              <div className="card" style={{ width: "18rem" }} >
                <img src={oggetto.image} className="card-img-top" alt="{oggetto.name}" />
                <div className="card-body">
                  <h5 className="card-title">{oggetto.name}</h5>
                  <p className="card-text">{oggetto.birth_year}</p>
                  <p className="card-text">{oggetto.nationality}</p>
                  <p className="card-text">{oggetto.biography}</p>
                  <p className="card-text">{oggetto.awards}</p>
  


                </div>
              </div>
          </div>     

      ))}
 </div>
      </div>
    </>
  )
}

export default App
