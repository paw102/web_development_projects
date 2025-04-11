import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Clock from "./clock";


function List(){
  const navigate = useNavigate();

  const gotoArticle = () => {
    navigate('/article');
  }

  return(
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 'auto',
        background: '#333',
        color: '#fff',
      }}>
        <h1>메모 목록</h1>
        <Clock/>
      </Box>
      <br />
    <Button onClick={gotoArticle} sx={{
      width: 'auto',
      background: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s',
      textAlign: 'center',
    }}>메모 작성</Button>
    </Box>
  )
}
export default List;