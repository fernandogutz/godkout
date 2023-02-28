import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPost = (endpoint, jwt, postData) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.post(endpoint, postData, {
      headers: {
        "Authorization": jwt,
        "Content-Type": "application/json",
      },
    });
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [postData]);

  return data;
};

export default useFetchPost;
