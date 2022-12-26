import { useState } from 'react';
import Navbar from './components/Navbar';
import { PROPERTIES } from './Data/properties';
import './App.css';
import Card from './components/Card';
import Filters from './components/Filters';

function App() {

  const [properties, setProperties] = useState(PROPERTIES)

  const updateProperties = (data) => {
    setProperties(data)
  }

  return (
    <div className="App">
      <div className="main">
      <Navbar />
      <h1>Search Properties To Rent</h1>
      <Filters updateProperties = {(data) => updateProperties(data)} />
      <div className="properties">
        {
          properties.map((prop) => {
           return( 
            <Card prop = {prop} />
            )
          } )
        }
      </div>
    </div>
    </div>
  );
}

export default App;
