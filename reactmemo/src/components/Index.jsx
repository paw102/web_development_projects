import { Box, Typography } from "@mui/material";

function Index () {
  return(
  <Box sx={{
    width: '100%',
    height: '100%',
    padding: '40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap: 20,
    }}>
  <Typography variant="h3">
    Welcome to iPad Memo App
    <button></button>
  </Typography>
  </Box>
  )
}

export default Index;