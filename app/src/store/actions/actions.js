import axios from "axios";

export const getCountry = () => {
  return dispatch => {
    dispatch({ type: "GET_COUNTRY" });
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
};
