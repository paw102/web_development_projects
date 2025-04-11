import { Button, Box, Typography, TextField, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Clock from "./clock";

function Article(){
  const navigate = useNavigate();

  const gotoIndex = () => {
    navigate('/list');
  }


  return(
    <Box >
      <Box sx={{
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      background: '#333',
      color: '#fff',
    }}>
    <Button onClick={gotoIndex} sx={{
      display: 'absolute',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold',
    }}> &lt;목록으로</Button>
    <Box />
    <Clock />
      </Box>
    <Box sx={{
        background: '#333',
        color: '#fff',
        paddingBottom: '20px'
      }}>
    <Typography variant="h1" sx={{fontSize: '40px', fontWeight:'bold', margin: 'auto' ,textAlign: 'center',}}>메모 작성</Typography>
    </Box>
    <Box sx={{
      width: 'auto',
      background: '#f9f9f9',
      aspectRatio: 2,
      margin: '30px auto',
      padding: 'auto',
      display: 'flex',
      flexDirection:'column',
      gap: '20px',
      border: '2px solid #ccc',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}>
      <Input type="text" disableUnderline placeholder="제목을 입력하시오." sx={{
        width: '100%',
        height: 'auto',
        padding: 'auto',
        fontSize: '24px',
        border: '2px solid #ccc',
        borderRadius: '10px',
      }}/>
    
      <Button onClick={gotoIndex} sx={{
      width: 'auto',
      background: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s',
    }}>
    저장</Button>
    </Box>

    </Box>
  )
}
export default Article;