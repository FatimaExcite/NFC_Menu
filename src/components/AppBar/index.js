import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Link as LinkM } from "@mui/material";

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
    { name: "Escribir", path: "/NFC_Menu" },
    { name: "Leer", path: "leer" },
  ];

  return (
    <Stack>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar sx={{ display: "flex" }}>
            <Typography variant="h6" noWrap>
              NFC
            </Typography>
            <Toolbar sx={{ display: "flex", justifyContent: "right" }}>
              {pages.map((page, index) => (
                <LinkM sx={{ ml: 3, mr: 3 }} component="button" underline="hover" key={index}>
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
