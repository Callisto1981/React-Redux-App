export const fetchCountry = () => {
  return dispatch => {
    dispatch({ type: "FETCH_COUNTRY" });
  };
};
