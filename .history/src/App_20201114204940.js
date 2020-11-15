import React, { useEffect, useState } from "react";
import * as api from "./BooksAPI";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../components/Main";
import Search from "../components/Search";

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
                update={update}
              />
            )}
          />
          <Route path='/search' component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
