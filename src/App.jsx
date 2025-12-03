import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  let [dati, setDati] = useState([])
  //Creare uno stato per la card selezionata, cioè quando cliccho su una card, memorizzo l’oggetto cliccato.
  const [selectedCard, setSelectedCard] = useState(null);; //null inizialmente dato che non ho selezionato alcuna card


  //FETCHING DEI DATI
  function fetchDati() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then(
      (resp) => {
        setDati(resp.data); //data è l'oggetto 
      })
  }

  useEffect(fetchDati, []); //fetchdati solo al primo rendering





  return (
    <>
      <header className='bg-warning py-2'><div className='container'> <h1>Lista Attori</h1></div></header>


      <div className="container text-center" style={{position:"relative"}}>
        <div className="row">


          {dati.map((oggetto, index) => (
            <div className="col" key={oggetto.id}>
              <div className="card" style={{ width: "18rem" }} onClick={() => setSelectedCard(oggetto)} > {/*nserisco l'onClik  */}
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



      {/* // aggiungo la card selezionata
      //se seleziono una card mi appare l'overlay */}

      {selectedCard !== null ? (
        <>
          <div style={{ backgroundColor: "black", width: "100vw", height: "100vh", zIndex: "1000", opacity:"0.9", position:"fixed", top:0, display:"flex", justifyContent:"center", alignItems:"center"}}   onClick={() => setSelectedCard(null)}>

                <div className="card" style={{ width: "18rem", zIndex:"1001" }}> 
                <img src={selectedCard.image} className="card-img-top" alt="{oggetto.name}" />
                <div className="card-body">
                  <h5 className="card-title">{selectedCard.name}</h5>
                  <p className="card-text">{selectedCard.birth_year}</p>
                  <p className="card-text">{selectedCard.nationality}</p>
                  <p className="card-text">{selectedCard.biography}</p>
                  <p className="card-text">{selectedCard.awards}</p>



                </div>
              </div>
          </div>
        </>
      ) : null}










    </>
  )
}

export default App
