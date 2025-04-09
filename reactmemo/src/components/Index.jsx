import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Index () {
  const navigate = useNavigate();

  const gotoList = () => {
    navigate('/list');
  }

  return(
  <Box sx={{
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    }}>
  <Typography variant="h1" sx={{
      fontSize: '2em',
      fontWeight: 'bold',
      marginTop: '0.67em',
      marginBottom: '0.67em',
      }}> 
    Welcome to iPad Memo App
<Box sx={{display: 'flex', flexDirection:'column'}}>
  <br />
    <Button onClick={gotoList} sx={{
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
      메모 보러가기</Button>
</Box>
  </Typography>
  </Box>
  )
}

export default Index;