import React, { useState, useEffect } from "react";
import "./SubmitForm.css";
import Button from "../Button/Button"; // Correct path for Button component

// Fix type error from API for ZipCodes
interface ZipCodes {
  nr: string;
  navn: string;
}

const SubmitForm = () => {
  const [zipCode1, setZipCode1] = useState("");
  const [city1, setCity1] = useState("");

  const [zipCode2, setZipCode2] = useState("");
  const [city2, setCity2] = useState("");

  const [zipCodes, setZipCodes] = useState<ZipCodes[]>([]);

  const [isAddress2Shown, setisAddress2Shown] = useState(false);

  const checkboxHandler = () => {
    setisAddress2Shown(!isAddress2Shown);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [cvrNumber, setCvrNumber] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 8) {
      setPhoneNumber(onlyNums);
    }
  };

  const handleCVRNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 8) {
      setCvrNumber(onlyNums);
    }
  };

  const handleGoToPayment = (e: any) => {
    console.log("Proceed to payment");
    e.preventDefault();
  };

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

  // Logic to get matching city name from zipcode
  useEffect(() => {
    const matchingPostalCode = zipCodes.find((code) => code.nr === zipCode1);
    if (matchingPostalCode) {
      setCity1(matchingPostalCode.navn);
    } else {
      setCity1("Indtast Gyldigt Postnummer");
    }
  }, [zipCode1, zipCodes]);

  useEffect(() => {
    const matchingPostalCode = zipCodes.find((code) => code.nr === zipCode2);
    if (matchingPostalCode) {
      setCity2(matchingPostalCode.navn);
    } else {
      setCity2("Indtast Gyldigt Postnummer");
    }
  }, [zipCode2, zipCodes]);

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
          <input
            type="text"
            id="fnavn"
            name="fnavn"
            className="form-input"
            required
          />
          <label htmlFor="enavn" className="form-label">
            Efternavn:
          </label>
          <input
            type="text"
            id="enavn"
            name="enavn"
            className="form-input"
            required
          />
          <label htmlFor="telefon" className="form-label">
            Telefon:
          </label>
          <input
            type="text"
            id="telefon"
            name="telefon"
            value={phoneNumber}
            minLength={8}
            maxLength={8}
            onChange={handlePhoneNumberChange}
            required
            className="form-input"
          />
          <label htmlFor="mail" className="form-label">
            Mail:
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            className="form-input"
            required
          />
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
          <input
            type="text"
            id="CVR"
            name="CVR"
            value={cvrNumber}
            onChange={handleCVRNumberChange}
            className="form-input"
          />

          <label htmlFor="adresse1" className="form-label">
            Adresse 1:
          </label>
          <input
            type="text"
            id="adresse1"
            name="adresse1"
            className="form-input"
            required
          />
          <label htmlFor="postnummer1" className="form-label">
            Postnummer:
          </label>
          <input
            type="number"
            id="postnummer1"
            name="postnummer1"
            value={zipCode1}
            onChange={(e) => setZipCode1(e.target.value)}
            className="form-input"
            required
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
          <label htmlFor="otherAddress" className="form-label">
            Skal produkterne sendes til en anden adresse?
          </label>
          <div>
            <input
              type="checkbox"
              checked={isAddress2Shown}
              onChange={checkboxHandler}
            />
            <span>{isAddress2Shown ? "Skriv adresse 2" : "Ja"}</span>
          </div>

          {isAddress2Shown && (
            <div>
              <div>
                <label htmlFor="adresse2" className="form-label">
                  Adresse 2:
                </label>
                <input
                  type="text"
                  id="adresse2"
                  name="adresse2"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="postnummer2" className="form-label">
                  Postnummer:
                </label>
                <input
                  type="number"
                  id="postnummer2"
                  name="postnummer2"
                  value={zipCode2}
                  className="form-input"
                  onChange={(e) => setZipCode2(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="by2" className="form-label">
                  By:
                </label>
                <input
                  type="text"
                  id="by2"
                  name="by2"
                  className="form-input"
                  value={city2}
                />
              </div>
            </div>
          )}
          <Button
            text="Gå til betaling"
            onClick={handleGoToPayment}
            className="proceed-to-payment-button"
          />
        </form>
      </div>
    </>
  );
};

export default SubmitForm;
