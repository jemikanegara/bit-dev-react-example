import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from '@bit/jemikanegara.cra-graphql.sign-up';

function App() {
  return (
    <div className="App">
      <SignUp/>
      <hr></hr>
      <Login/>
    </div>
  );
}

export default App;
