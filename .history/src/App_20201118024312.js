import React, { useEffect, useState } from "react";
import * as api from "./BooksAPI";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState([]);

  const changeShelf = (book, e) => {
    console.log(`book to be sent:${book}, to the shelf:${e.key}`);
    api.update(book, e.key).then((res) => {
      console.log(res);
      setUpdate(res);
    });
  };

  const warning = () => {
    console.log("Already belongs to this shelf");
  };

  useEffect(() => {
    //runs on the first render and gets an array that contains all the books for the different shelves
    //runs
    api
      .getAll()
      .then((res) => {
        let info = res;
        setData(info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  console.log(data);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Main
                {...props}
                data={data}
                changeShelf={changeShelf}
                warning={warning}
              />
            )}
          />
          <Route
            path='/search'
            render={(props) => (
              <Search {...props} data={data} changeShelf={changeShelf} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
