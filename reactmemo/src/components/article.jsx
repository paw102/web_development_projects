import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Article(){
  const navigate = useNavigate();

  const gotoIndex = () => {
    navigate('/list');
  }


  return(
    <>
    <h1>메모 작성 페이지</h1>
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
    메모 올리기</Button>
    </>
  )
}
export default Article;