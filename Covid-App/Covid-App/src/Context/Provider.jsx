import React, { createContext, useState, useEffect } from "react";
import fetchData from "../API/request";

export const MyDataContext = createContext();

export const MyDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "908d96ecbdmsh9ecb7d5423cb411p19721cjsn6eb0240174d3";
  const apiUrl = "https://covid-193.p.rapidapi.com/statistics";

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData(apiKey, apiUrl);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const delayFetch = setTimeout(() => {
      fetchDataFromApi();
    }, 1000); // 1 second delay

    return () => clearTimeout(delayFetch);
  }, [apiKey, apiUrl]);

  return (
    <MyDataContext.Provider value={{ data, loading, error }}>
      {children}
    </MyDataContext.Provider>
  );
};
