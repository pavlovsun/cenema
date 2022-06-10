import React from 'react';
import { Link } from 'react-router-dom';
import GetFilms from '../untils/getFilms.js';
const Films = () => {
  const getFilms = GetFilms('list');
  return (
    <>
      <div className="films">
        <div className="d-flex">
          {getFilms[0] !== 'film' ? (
            getFilms.map((el) => (
              <div
                key={el.imdbID + 1}
                className="card"
                style={{ width: '18rem' }}
              >
                <img src={el.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.Title}</h5>
                  <p className="card-text">{el.Year}</p>
                  <Link
                    rel="noreferrer"
                    to={el.Title}
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Films;
