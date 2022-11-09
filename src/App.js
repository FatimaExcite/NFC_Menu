import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import AppBarDark from "./components/AppBar";
import { Box } from "@mui/material";
import Home from "../src/routes/home";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
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
