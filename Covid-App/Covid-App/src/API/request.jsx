const fetchData = async (apiKey, apiUrl) => {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.response; // Adjust according to the structure of the API response
};

export default fetchData;
