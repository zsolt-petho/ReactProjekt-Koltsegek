import React from "react";
import { MdAdd, MdRefresh } from "react-icons/md";

const KöltségŰrlap = ({
  kiadás,
  ellenérték,
  handleKiadás,
  handleEllenérték,
  handleHozzáad,
  módosít
}) => {
  return (
    <form onSubmit={handleHozzáad}>
      <div className="űrlap-központ">
        <div className="űrlap-tag">
          <label htmlFor="kiadás">kiadás:</label>
          <input
            type="text"
            className="űrlap-vezérlés"
            id="kiadás"
            name="kiadás"
            placeholder="pl. fodrász"
            maxLength="13"
            value={kiadás}
            onChange={handleKiadás}
          />
        </div>
        <div className="űrlap-tag">
          <label htmlFor="ellenérték">ellenérték:</label>
          <input
            type="number"
            className="űrlap-vezérlés"
            id="ellenérték"
            name="ellenérték"
            placeholder="pl. 5000"
            max="999999999"
            value={ellenérték}
            onChange={handleEllenérték}
          />
        </div>
      </div>
      {módosít ? (
        <button type="submit" className="btn btn-tételt-módosít">
          Tételt módosít
          <MdRefresh className="btn-ikon" />
        </button>
      ) : (
        <button type="submit" className="btn btn-hozzáad">
          Listához ad
          <MdAdd className="btn-ikon" />
        </button>
      )}
    </form>
  );
};

export default KöltségŰrlap;
