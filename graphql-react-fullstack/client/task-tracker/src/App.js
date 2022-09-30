import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import  MessageForm  from './components/MessageForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";
import {Navigation} from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navigation />
      <div className='container p-4'>
        <Routes>
            <Route exact path="/" element={<MessageList />}></Route>
            <Route exact path="/new-task" element={<MessageForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
