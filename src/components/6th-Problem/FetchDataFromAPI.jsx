// question :- Create a Component that fetches data from an API and displays it.

import React, { useEffect, useState } from "react";

const FetchDataFromAPI = () => {
  const [apiData, setApiData] = useState([]);

  function fetchAPIdata() {
    try {
      // in that for a simple basic undestanding i use .then syntax
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((jsondata) => setApiData(jsondata));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAPIdata();
  }, []);

  return (
    <div>
      {apiData ? (
        <div>
          <h2>Title : {apiData.title}</h2>
          <p>Body : {apiData.body}</p>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default FetchDataFromAPI;
