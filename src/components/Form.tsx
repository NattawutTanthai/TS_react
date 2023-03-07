import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  Dispatch,
  useState,
  SetStateAction,
} from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

interface Props {
  seriesList: SeriesProps["seriesList"];
  setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>;
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {
  const [name, setName] = useState("");
  const [cover, setCover] = useState("");
  const [genre, setGenre] = useState("");
  const [imdb, setImdb] = useState<SeriesProps | any>(0);
  const [seasons, setSeasons] = useState<SeriesProps | any>(0);


  const setNameinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const setCoverinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCover(e.target.value);
  };
  const setGenreinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };
  const setImdbinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImdb(e.target.value);
  };
  const setSeasonsinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSeasons(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!name && !cover && !genre && !imdb && !seasons) {
      alert("Please enter series information");
      return;
    }
    const seriesData = { name, cover, genre, imdb, seasons };
    setSeriesList([...seriesList, seriesData]);
    setName("");
    setCover("");
    setGenre("");
    setImdb(0);
    setSeasons(0);
  };

  return (
    <>
      <div>
        <h1>form</h1>
        <div className="form-container">
          <div className="form-div">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={setNameinputHandler}
            />
          </div>
          <div className="form-div">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              name="genre"
              value={genre}
              onChange={setGenreinputHandler}
            />
          </div>
          <div className="form-div">
            <label htmlFor="cover">Cover</label>
            <input
              type="text"
              name="cover"
              value={cover}
              onChange={setCoverinputHandler}
            />
          </div>
          <div className="form-div">
            <label htmlFor="imdb">IMDB</label>
            <input
              type="number"
              name="imdb"
              value={imdb}
              onChange={setImdbinputHandler}
            />
          </div>
          <div className="form-div">
            <label htmlFor="seasons">Seasons</label>
            <input
              type="number"
              name="seasons"
              value={seasons}
              onChange={setSeasonsinputHandler}
            />
          </div>
          <button type="button" onClick={handleClick}>
            Add series
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
