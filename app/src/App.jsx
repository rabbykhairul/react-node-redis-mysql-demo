import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/countries`)
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log("err: ", err);
        alert("Can't load data");
      });
  }, []);

  return (
    <>
      <header style={{ width: "100vw", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>Country List</h1>
        <hr style={{ width: "100%" }} />
      </header>
      <div style={{ display: "flex" }}>
        <section>Foo</section>
        <section>Foo</section>
        <section>Foo</section>
      </div>
    </>
  );
}

export default App;
