import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import classnames from "classnames";

const BASE_URL = "http://localhost:4000";

function App() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selected) return;

    setIsLoading(true);
    axios
      .get(`${BASE_URL}/countries/${selected}`)
      .then(({ data }) => {
        setCountry(data);
      })
      .finally(() => setIsLoading(false));
  }, [selected]);

  useEffect(() => {
    console.table(["effect"]);
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
            <div className={classnames("list", { selected: c === selected })} key={idx} onClick={() => setSelected(c)}>
              {c}
            </div>
          ))}
        </section>
        <section>{isLoading ? <h3>Loading...</h3> : <pre>{JSON.stringify(country, null, 2)}</pre>}</section>
      </div>
    </>
  );
}

export default App;
