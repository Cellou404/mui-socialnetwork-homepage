
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Stack } from "@mui/system";
import Add from './components/Add'
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light")
  const darkMode = createTheme({
    palette: {
     mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkMode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction='row' justifyContent='space-between' spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
