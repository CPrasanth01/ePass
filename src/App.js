import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Card} from "react-bootstrap";
import Routes from './Routes';

function App() {
  return (
    <Card style={{ height: '43rem' , width:'88rem'}}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Card>
  );
}

export default App;
