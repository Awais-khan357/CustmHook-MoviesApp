import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (search) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=80bf276&s=${search}`
        );
        setData(response.data.Search || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);

  return { data, loading, error };
};

export default useFetch;
