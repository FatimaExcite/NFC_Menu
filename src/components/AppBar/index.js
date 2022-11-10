import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
//import LinkM from "@mui/material/Link";
import { Link as LinkM } from "@mui/material";

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function AppBarDark() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Write", path: "write" },
    { name: "Read", path: "read" },
  ];

  return (
    <Stack>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar sx={{ display: "flex" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              NFC
            </Typography>
            <Toolbar sx={{ display: "flex", justifyContent: "right" }}>
              {pages.map((page, index) => (
                <LinkM sx={{ ml: 3, mr: 3 }} component="button" underline="hover">
                  <Link
                    to={page.path}
                    key={index}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {page.name}
                  </Link>
                </LinkM>
              ))}
            </Toolbar>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
