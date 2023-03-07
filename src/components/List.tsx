import React, { FC } from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

const List: FC<SeriesProps> = ({ seriesList }) => {
  return (
    <>
      <div className="series-list">
        {seriesList.map((series, index) => {
          return (
            <div className="series-item" key={index}>
              <h2>{series.name}</h2>
              <img src={series.cover} style={{width:150}} alt="Series-cover" />
              <p>Genre: {series.genre}</p>
              <p>IMDB: {series.imdb}</p>
              <p>Seasons: {series.seasons}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
