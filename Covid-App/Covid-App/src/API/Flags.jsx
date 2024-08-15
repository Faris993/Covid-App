import React, { useState, useEffect } from "react";
import axios from "axios";

function useFlags() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setFlags(
          response.data.map((country) => ({
            name: country.name.common,
            flag: country.flags.svg,
          }))
        );
      } catch (error) {
        console.log(error);
      }
      fetchFlags();
    };
  }, []);

  return flags;
}

export default useFlags;
