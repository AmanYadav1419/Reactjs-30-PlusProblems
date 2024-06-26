import axios from "axios";
import React, { useEffect, useState } from "react";

const MultipleAPIdataFetch = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data1 && (
        <div>
          <h3>Data 1</h3>
          <p>{data1.title}</p>
          <p>{data1.body}</p>
        </div>
      )}
      {data2 && (
        <div>
          <h3>Data 2</h3>
          <p>{data2.title}</p>
          <p>{data2.body}</p>
        </div>
      )}
    </div>
  );
};

export default MultipleAPIdataFetch;
