import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData("Fetched Data");
      setLoading(false);
    }, 2000);
  }, []);

  return <p>{loading ? "Loading..." : data}</p>;
};

export default DataFetcher;
