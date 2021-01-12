import React from "react";
import Tétel from "./KöltségTétel";
import { MdDeleteForever } from "react-icons/md";

const KöltségLista = ({
  költségek,
  handleTöröl,
  handleMódosít,
  listaTörlése, 
  módosít
}) => {
  return (
    <>
      <ul className="lista">
        {költségek.map((költség) => {
          return (
            <Tétel
              key={költség.id}
              költség={költség}
              handleTöröl={handleTöröl}
              handleMódosít={handleMódosít}
              módosít={módosít}
            />
          );
        })}
      </ul>
      {módosít
        ? költségek.length > 0 && (
            <button
              className="btn btn-listat-töröl"
              onClick={listaTörlése}
              disabled={true}>
              Teljes lista törlése
              <MdDeleteForever className="btn-ikon" />
            </button>
            )
        : költségek.length > 0 && (
            <button 
              className="btn btn-listat-töröl" 
              onClick={listaTörlése}>
              Teljes lista törlése
              <MdDeleteForever className="btn-ikon" />
            </button>
          )};
    </>
  );
};

export default KöltségLista;
