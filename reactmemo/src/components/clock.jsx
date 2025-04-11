import { Box, Typography } from "@mui/material";
import { useState } from "react";

function Clock(){
  function nowTime (){
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    return `${nowHours} : ${nowMinutes}`;
  }

  const [time, setTime] = useState(nowTime);

  setInterval(() => {
    setTime(nowTime), 1000
  });

  return(
  <Box sx={{
  display: 'flex',
  flexDirection: 'reverse-column',
  justifyContent: 'space-between',
  }}>
    <Box />
    <Typography sx={{
      padding: '10px',
      fontWeight: 'bold', 
      fontSize: '18px'}}>{time}</Typography>
  </Box>
  );
}

export default Clock;