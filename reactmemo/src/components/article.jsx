import { Button, Box, Typography, TextField, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Clock from "./clock";
import { useState } from "react";

function Article(){

  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ writer, setWriter ] = useState('');

  const handleSubmit = () => {
    let boardInputDatas = {
      id: 0,
      title: title.trim(),
      content: content.trim(),
      writer: writer.trim(),
    }

    let boardDatas = localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : [];

  boardInputDatas.id = boardDatas.length;
  boardDatas.push({ ...boardInputDatas });

  localStorage.setItem("boardDatas", JSON.stringify(boardDatas));
  
  navigate('/list');

  }

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
      <Input type="text" value={title} disableUnderline placeholder="제목을 입력하시오." onChange={(e) => setTitle(e.target.value)} sx={{
        width: 'auto',
        height: '50px',
        padding: '12px',
        fontSize: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
      }}/>

      <TextField type="text" value={content} variant="outlined" placeholder="내용을 입력하시오." multiline rows={11} onChange={(e) => setContent(e.target.value)} sx={{
      '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // 기본 테두리 제거
        }},
        border: '2px solid #ccc',
        borderRadius: '10px',
        }}/>

        <Input type="text" value={writer} disableUnderline placeholder="작성자 이름" onChange={(e) => setWriter(e.target.value)} sx={{
          width: '50%',
          height: '50px',
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #ccc',
          borderRadius: '10px',
          alignSelf: 'flex-end',
        }}/>
    
      <Button onClick={handleSubmit} sx={{
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