import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import react, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    dark: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
});

export default function WriteButton({ handleWrite }) {
  const [message, setMessage] = useState("");
  console.log("message", message);
  const [type, setType] = useState("");
  console.log("type", type);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const action = async () => {
    await handleWrite(type, message);
  };

  return (
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={12}>
        <Grid item xs={10} md={6}>
          <Paper elevation={5} sx={{ maxWidth: 550 }}>
            <Typography
              variant="h5"
              sx={{ padding: "16px", display: "flex", justifyContent: "center" }}
            >
              ESCRIBIR NFC
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ m: 3 }}>
                Tipo
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Tipo"
                onChange={handleChange}
                sx={{ m: 3 }}
              >
                <MenuItem value={"text"}>Texto</MenuItem>
                <MenuItem value={"url"}>URL</MenuItem>
              </Select>
              <TextField
                label="mensaje"
                id="message"
                sx={{ m: 3 }}
                onChange={handleChangeMessage}
              />
              <ThemeProvider theme={theme}>
                <Button color="dark" variant="contained" onClick={() => action()} sx={{ m: 3 }}>
                  Write NFC
                </Button>
              </ThemeProvider>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
