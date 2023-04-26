import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/page/About';



function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const toggleMode = () =>{
      if(mode === 'light') {
        setMode('dark');
        setText('light');
        document.body.style.background = 'gray'
        document.body.style.color = 'white'
      }
      else{ 
        setMode('light');
        setText('dark');
        document.body.style.background = ''
        document.body.style.background = ''
      }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode}/>
              <div className="container my-3">
                <Routes>
                  <Route exact path="/" element={<TextForm heading="Enter the text analyze below"/>} />
                  <Route exact path="/About" element={<About/>} />
                </Routes>
              </div>
      </Router>
    </>
  );
}

export default App;
