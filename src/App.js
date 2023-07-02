import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  return (
    <Fragment>
      <main>
        <Header />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
