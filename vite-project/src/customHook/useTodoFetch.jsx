import React, { useEffect, useState } from "react";

const useTodoFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, [url]);
  return [data];
};

export default useTodoFetch;
