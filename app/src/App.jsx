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
      <header
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderBottom: "1px solid black",
        }}
      >
        <h1>Country List</h1>
      </header>
      <div style={{ display: "flex", borderBottom: "1px solid black" }}>
        <section>Foo</section>
        <section>
          {countries.map((c, idx) => (
            <div className="list" key={idx}>
              {c}
            </div>
          ))}
        </section>
        <section>Foo</section>
      </div>
    </>
  );
}

export default App;
