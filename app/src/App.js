import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AppRouter from "./AppRouter";

function App() {
  const [data, setData] = useState([]); // Initialize state to store fetched data
  console.log(data);

  useEffect(() => {
    function getUser() {
      axios
        .get("/api/cardData")
        .then((res) => {
          setData(res.data); // Store fetched data in state
          console.log("Data Transfer Success", res.data);
        })
        .catch((err) => {
          console.log("Fetching Error", err);
        });
    }
    getUser();
  }, []);

  return (
    <>
      <AppRouter data={data} />; // Pass data as prop to HomePage
    </>
  );
}

export default App;
