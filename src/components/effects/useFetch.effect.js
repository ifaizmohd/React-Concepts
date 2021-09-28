import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
      let result = await response.json();
      setData(result);
    };
    fetchData();
  });

  return data;
};

export default useFetch;
