import React from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

const KöltségTétel = ({ 
  költség, 
  handleTöröl, 
  handleMódosít, 
  módosít 
}) => {
  const { id, kiadás, ellenérték } = költség;
  return (
    <li className="tétel">
      <div className="info">
        <span className="ktg_fajta">{kiadás}</span>
        <span className="ktg_érték"> {ellenérték}.- Ft</span>
      </div>
      <div className="info2">
        <button className="btn btn-módosít" onClick={() => handleMódosít(id)}>
          Módosít <MdEdit />
        </button>
        {módosít ? (
          <button
            className="btn btn-töröl"
            onClick={() => handleTöröl(id)}
            disabled={true}>
            Töröl <MdDeleteForever />
          </button>
        ) : (
          <button className="btn btn-töröl" onClick={() => handleTöröl(id)}>
            Töröl <MdDeleteForever />
          </button>
        )}
      </div>
    </li>
  );
};

export default KöltségTétel;
