import { useState } from "react";
import { SeriesProps } from "./interfaces/SeriesProps";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);

  return (
    <div>
      <center>
        <h1>My series Tanny</h1>
        <Form seriesList={seriesList} setSeriesList={setSeriesList} />
        <List seriesList={seriesList} />
      </center>
    </div>
  );
}

export default App;
