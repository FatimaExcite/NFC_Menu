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
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "../alert";

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
  const [type, setType] = useState("");
  const [snack, setSnack] = useState({
    open: false,
    message: "Error",
    type: "Success",
  });

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const action = async () => {
    await handleWrite(type, message)
      .then(() => {
        // throw { message: "test error" };
        setSnack({
          open: true,
          message: "Mensaje escrito correctamente",
        });
        setTimeout(() => {
          setSnack({
            open: false,
            message: "",
          });
        }, 6000);
      })
      .catch((error) => {
        setSnack({
          open: true,
          message: "Ocurrió un error",
          type: "error",
        });
        setTimeout(() => {
          setSnack({
            open: false,
            message: "",
          });
        }, 6000);
        console.log(error);
      });
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
                  ESCRIBIR NFC
                </Button>
                {snack.open && (
                  <Alert message={snack.message} Popen={snack.open} type={snack.type} />
                )}
              </ThemeProvider>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
