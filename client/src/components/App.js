import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page 1 BAD!!!
      <a href="/pagetwo">Move to page 2</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page 2 BAD!!!
      <a href="/">Move to page 1</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
