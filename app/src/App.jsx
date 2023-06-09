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
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !about.trim()) {
      alert("Please enter name & about info to save country!");
      return;
    }

    axios.post(`${BASE_URL}/countries`, { name, about }).then(() => {
      setCountries([name, ...countries]);
      setName("");
      setAbout("");
    });
  };

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
        <section>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />

            <br />
            <label htmlFor="about">About</label>
            <br />
            <textarea type="textarea" name="about" onChange={(e) => setAbout(e.target.value)} value={about} />

            <br />
            <button>Save</button>
          </form>
        </section>
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
