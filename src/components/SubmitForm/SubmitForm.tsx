import React from "react";
import "./SubmitForm.css";

const SubmitForm = () => {
  fetch("https://api.dataforsyningen.dk/postnumre")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching postal code data:", error);
    });

  return (
    <>
      <div className="form-container">
        <h1>Betaling og levering</h1>
        <form className="submit-form">
          <label htmlFor="land" className="form-label">
            Land:
          </label>
          <select name="land" id="land" className="form-select">
            <option value="danmark">Danmark</option>
          </select>
          <label htmlFor="fnavn" className="form-label">
            Fornavn:
          </label>
          <input type="text" id="fnavn" name="fnavn" className="form-input" />
          <label htmlFor="enavn" className="form-label">
            Efternavn:
          </label>
          <input type="text" id="enavn" name="enavn" className="form-input" />
          <label htmlFor="telefon" className="form-label">
            Telefon:
          </label>
          <input
            type="number"
            id="telefon"
            name="telefon"
            maxLength={8}
            required
            className="form-input"
          />
          <label htmlFor="mail" className="form-label">
            Mail:
          </label>
          <input type="email" id="mail" name="mail" className="form-input" />
          <label htmlFor="firmanavn" className="form-label">
            Firma (valgfri):
          </label>
          <input
            type="text"
            id="firmanavn"
            name="firmanavn"
            className="form-input"
          />
          <label htmlFor="CVR" className="form-label">
            CVR:
          </label>
          <input type="number" id="CVR" name="CVR" className="form-input" />
          <label htmlFor="adresse1" className="form-label">
            Adresse 1:
          </label>
          <input
            type="text"
            id="adresse1"
            name="adresse1"
            className="form-input"
          />
          <label htmlFor="postnummer1" className="form-label">
            Postnummer:
          </label>
          <input
            type="number"
            id="postnummer1"
            name="postnummer1"
            className="form-input"
          />
          <label htmlFor="by1" className="form-label">
            By:
          </label>
          <input type="text" id="by1" name="by1" className="form-input" />
          <label htmlFor="adresse2" className="form-label">
            Adresse 2:
          </label>
          <input
            type="text"
            id="adresse2"
            name="adresse2"
            className="form-input"
          />
          <label htmlFor="postnummer2" className="form-label">
            Postnummer:
          </label>
          <input
            type="number"
            id="postnummer2"
            name="postnummer2"
            className="form-input"
          />
          <label htmlFor="by2" className="form-label">
            By:
          </label>
          <input type="text" id="by2" name="by2" className="form-input" />
        </form>
      </div>
    </>
  );
};

export default SubmitForm;
