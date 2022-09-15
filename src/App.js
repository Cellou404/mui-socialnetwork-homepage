
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Stack } from "@mui/system";
import Add from './components/Add'
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
function App() {
  const [mode, setMode] = useState(false)
  const darkMode = createTheme({
    palette: {
     mode: mode ? 'dark': 'light',
    }
  })

  useEffect((event) => {
    const currentTheme = localStorage.getItem('light') || 'light'
    if (currentTheme !== 'light') {
      setMode(prevMode => !prevMode)
    }
  }, [])

  const changeTheme = (event) => {
    localStorage.setItem('light', mode ? 'light': 'dark')
    setMode(prevMode => !prevMode)
  }
  return (
    <ThemeProvider theme={darkMode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode} />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar 
            setMode={setMode} 
            mode={mode} 
            changeTheme={changeTheme}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
