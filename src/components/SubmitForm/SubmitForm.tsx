import React, { useState, useEffect } from "react";
import "./SubmitForm.css";

// Fix type error from API for ZipCodes
interface ZipCodes {
  nr: string;
  navn: string;
}

// Fix type error from API for Cities
interface Cities {
  nr: string;
  navn: string;
}

const SubmitForm = () => {
  const [zipCode1, setZipCode1] = useState("");
  const [city1, setCity1] = useState("");
  const [zipCode2, setZipCode2] = useState("");
  const [city2, setCity2] = useState("");
  const [zipCodes, setZipCodes] = useState<ZipCodes[]>([]);
  const [cities, setCities] = useState<Cities[]>([]);
  // TODO: Bug wiff duplicate zipCode and city, change to zipCode1 and zipCode2 etc.

  // Fetch API and set zipCodes to data
  useEffect(() => {
    fetch("https://api.dataforsyningen.dk/postnumre")
      .then((response) => response.json())
      .then((data) => {
        setZipCodes(data);
      })
      .catch((error) => {
        console.error("Error fetching postal code data:", error);
      });
  }, []);

  // Fetch API and set cities to data
  useEffect(() => {
    fetch("https://api.dataforsyningen.dk/postnumre")
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch((error) => {
        console.error("Error fetching cities data:", error);
      });
  }, []);

  // Logic to get matching city name from zipcode
  useEffect(() => {
    const matchingPostalCode = zipCodes.find((code) => code.nr === zipCode1);
    if (matchingPostalCode) {
      setCity1(matchingPostalCode.navn);
    } else {
      setCity1("");
    }
  }, [zipCode1, zipCodes]);

  // Logic to get matching zipcode from city name
  useEffect(() => {
    const matchingCity = cities.find((code) => code.navn === city2);
    if (matchingCity) {
      setZipCode2(matchingCity.nr);
    } else {
      setZipCode2("");
    }
  }, [city2, cities]);

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
            type="text"
            id="postnummer1"
            name="postnummer1"
            value={zipCode1}
            onChange={(e) => setZipCode1(e.target.value)}
            className="form-input"
          />
          <label htmlFor="by1" className="form-label">
            By:
          </label>
          <input
            type="text"
            id="by1"
            name="by1"
            value={city1}
            className="form-input"
            readOnly
          />
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
            type="text"
            id="postnummer2"
            name="postnummer2"
            className="form-input"
            value={zipCode2}
            readOnly
          />
          <label htmlFor="by2" className="form-label">
            By:
          </label>
          <input
            type="text"
            id="by2"
            name="by2"
            value={city2}
            onChange={(e) => setCity2(e.target.value)}
            className="form-input"
          />
        </form>
      </div>
    </>
  );
};

export default SubmitForm;
