import { Box, Container } from "@mui/material";
import Index from './components/Index'
import './App.css'

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
      <Index/>
    </Box>
  )
}

export default App
