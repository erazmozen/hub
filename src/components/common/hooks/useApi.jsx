import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (url, trigger) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const options = {
      method: "GET",
      url: url,
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("axios", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("axios error", error);
      });
  };

  useEffect(() => {
    console.log("useApi useEffect[]");
    fetchApi();
  }, [trigger]);

  return { loading, data };
};

export default useApi;
