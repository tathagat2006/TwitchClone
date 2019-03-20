import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page 1<Link to="/pagetwo">Move to page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page 2<Link to="/">Move to page 1</Link>
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

//concept of single page app means using link tags i.e. not loading the whole page again... look at the network req tab for more info.

export default App;
