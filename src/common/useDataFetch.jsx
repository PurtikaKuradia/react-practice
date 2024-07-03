import { useEffect, useMemo, useState } from "react";

const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then(
        (response) => response.json(),
        (error) => {
          setError("Oops something went wrong", error);
          setLoading(false);
        }
      )
      .then((json) => {
        setData(json);
        setLoading(false);
        if (Object.keys(json).length === 0) {
          setError("Data not found");
        }
      })
      .catch(() => {
        setError("Oops something went wrong");
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
export default useDataFetch;
