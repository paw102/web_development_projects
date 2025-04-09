import { Box } from "@mui/material";
import Index from './components/Index'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import List from './components/list'
import Article from './components/article'

function App() {

  return (
    <Box sx={{
      width: '80vw',
      maxWidth: 1050,
      aspectRatio: 4/3,
      border: '15px solid black',
      borderRadius: '30px',
      position: 'relative',
      margin: '50px auto',
      overflow: 'hidden',
      background: '#f5f5f5',
      boxShadow:'0 4px 30px rgba(0, 0, 0, 0.15)'
    }}>
      
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/list" element={<List/>}/>
        <Route path= "/article" element={<Article/>}/>
    </Routes>
    </Router>
    </Box>
  )
}

export default App
