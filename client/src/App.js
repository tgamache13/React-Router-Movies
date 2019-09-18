import React, { useState } from 'react';
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movies from './Movies/Movie';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => (
        <Movie
          {...props}
        />
      )} />
    </div>
  );
};

export default App;
