import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import CardComponent from './Card.js'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
        <h2>Section 002</h2>
          <p>WVU ID: 800214110</p>
          <p>Hi I am Eddie</p>
          <CardComponent />
    </div>
  );
}

export default App;
