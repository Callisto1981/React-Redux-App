import axios from "axios";

export const fetchCountry = () => {
  return dispatch => {
    dispatch({ type: "FETCH_COUNTRY" });
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
};
