import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import AppBarDark from "./components/AppBar";
import { Box } from "@mui/material";
import Write from "./routes/write";
import Read from "./routes/read";

function App() {
  return (
    <Routes>
      <Route path={"/NFC_Menu"} element={<Layout />}>
        <Route index element={<Write />} />
        <Route path={"leer"} element={<Read />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <AppBarDark />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default App;
