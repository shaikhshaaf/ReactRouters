import React, { Component } from 'react';

import  { BrowserRouter, Route } from 'react-router-dom'; 




const NewRoute = () => {
  return(
    <div>
      <p>New route1</p>
    </div>
  );
}



class App extends Component {
  render() {

    return (

      <BrowserRouter>
      <Route  path="/new" Component={ NewRoute } />
      </BrowserRouter>

    );
  }

}

export default App;
