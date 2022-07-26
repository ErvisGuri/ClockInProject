import './App.css';

import HomePage from './components/Page/HomePage/HomePage';

import { io } from 'socket.io-client';
const socket = io.connect("http://localhost:3001")

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
