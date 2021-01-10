import React, { useState } from "react";
import "./App.css";
import KöltségŰrlap from "./Komponensek/KöltségŰrlap";
import KöltségLista from "./Komponensek/KöltségLista";
import Értesítés from "./Komponensek/Értesítés";

var aktuális_év = new Date().getFullYear();

var hónap = new Array();
hónap[0] = "január";
hónap[1] = "február";
hónap[2] = "március";
hónap[3] = "április";
hónap[4] = "május";
hónap[5] = "június";
hónap[6] = "július";
hónap[7] = "augusztus";
hónap[8] = "szeptember";
hónap[9] = "október";
hónap[10] = "november";
hónap[11] = "december";

let aktuális_hónap = hónap[new Date().getMonth()];

var min = 1;
var max = 999999;

const kezdetiKöltségek = [
  {
    id: Math.floor(Math.random() * (max - min + 1) + min),
    kiadás: "kondibérlet",
    ellenérték: 10000
  },
  {
    id: Math.floor(Math.random() * (max - min + 1) + min),
    kiadás: "bevásárlás",
    ellenérték: 15000
  }
];

function App() {
  const [költségek, setKöltségek] = useState(kezdetiKöltségek);
  const [kiadás, setKiadás] = useState("");
  const [ellenérték, setEllenérték] = useState("");
  const [értesítés, setÉrtesítés] = useState({ show: false });
  const [módosít, setMódosít] = useState(false);
  const [id, SetId] = useState(0);

  const handleKiadás = (e) => {
    setKiadás(e.target.value);
  };

  const handleEllenérték = (e) => {
    setEllenérték(e.target.value);
  };

  const handleÉrtesítés = ({ type, text }) => {
    setÉrtesítés({ show: true, type, text });
    setTimeout(() => {
      setÉrtesítés({ show: false });
    }, 5000);
  };

  const handleHozzáad = (e) => {
    e.preventDefault();
    if (kiadás !== "" && ellenérték > 0) {
      if (módosít) {
        let tempKöltségek = költségek.map((tétel) => {
          return tétel.id === id ? { ...tétel, kiadás, ellenérték } : tétel;
        });
        setKöltségek(tempKöltségek);
        setMódosít(false);
        handleÉrtesítés({ type: "megfelelő", text: "Tétel módosítva!" });
      } else {
        const egyediKöltség = {
          id: Math.floor(Math.random() * (max - min + 1) + min),
          kiadás,
          ellenérték
        };
        setKöltségek([egyediKöltség, ...költségek]);
        handleÉrtesítés({ type: "megfelelő", text: "Tétel listához adva!" });
      }
      setKiadás("");
      setEllenérték("");
    } else {
      handleÉrtesítés({
        type: "hibás",
        text: `A "Kiadás" / "Ellenérték" mezőt üresen hagytad, vagy az "Ellenérték" mezőben mínusz érték szerepel!`
      });
    }
  };

  const listaTörlése = () => {
    setKöltségek([]);
    handleÉrtesítés({ type: "hibás", text: "Lista törölve!" });
  };

  const handleTöröl = (id) => {
    let tempKöltségek = költségek.filter((item) => item.id !== id);
    setKöltségek(tempKöltségek);
    handleÉrtesítés({ type: "hibás", text: "Tétel törölve!" });
  };

  const handleMódosít = (id) => {
    let költség = költségek.find((tétel) => tétel.id === id);
    let { kiadás, ellenérték } = költség;
    setKiadás(kiadás);
    setEllenérték(ellenérték);
    setMódosít(true);
    SetId(id);
  };

  return (
    <>
      <h1>
        Költések - {aktuális_év}. {aktuális_hónap}
      </h1>
      <h3>
        Összes {aktuális_hónap} havi költés:{" "}
        <span className="összesítés">
          {költségek.reduce((össz, akt) => {
            return (össz += parseInt(akt.ellenérték));
          }, 0)}
          .- Ft
        </span>
      </h3>
      <main className="alkalmazás">
        <KöltségŰrlap
          kiadás={kiadás}
          ellenérték={ellenérték}
          handleKiadás={handleKiadás}
          handleEllenérték={handleEllenérték}
          handleHozzáad={handleHozzáad}
          módosít={módosít}
        />
        {értesítés.show && (
          <Értesítés type={értesítés.type} text={értesítés.text} />
        )}
        <KöltségLista
          költségek={költségek}
          handleTöröl={handleTöröl}
          handleMódosít={handleMódosít}
          listaTörlése={listaTörlése}
        />
      </main>
    </>
  );
}

export default App;
