import { Button, Box, Typography, TextField, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Clock from "./clock";

function Article(){
  const navigate = useNavigate();

  const gotoIndex = () => {
    navigate('/list');
  }


  return(
    <Box>
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
      aspectRatio: 4 / 3,
      margin: '50px auto',
      padding: '40px',
      display: 'flex',
      flexDirection:'column',
      gap: '20px',
      border: '2px solid #ccc',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      // justifyContent: 'center',
      textAlign: 'center',
    }}>
      <Input type="text" disableUnderline placeholder="제목을 입력하시오." sx={{
        width: 'auto',
        height: '50px',
        padding: '12px',
        fontSize: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
      }}/>

      <TextField type="text" variant="outlined" placeholder="내용을 입력하시오." multiline rows={11} sx={{
      '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // 기본 테두리 제거
        }},
        border: '2px solid #ccc',
        borderRadius: '10px',
        }}/>

        <Input type="text" disableUnderline placeholder="작성자 이름" sx={{
          width: '50%',
          height: '50px',
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #ccc',
          borderRadius: '10px',
          alignSelf: 'flex-end',
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