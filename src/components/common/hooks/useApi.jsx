import { useEffect, useReducer } from "react";
import {
  INITIAL_STATE,
  fetchReducer,
} from "../../common/functions/fetchReducer";

const useApi = (url) => {
  const [state, dispatch] = useReducer(
    fetchReducer,
    INITIAL_STATE
  );

  const fetchApi = () => {
    dispatch({ type: "FETCH_START" });
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  useEffect(() => {
    console.log("useApi useEffect[]");
    fetchApi();
  }, [url]);

  return { state };
};

export default useApi;
