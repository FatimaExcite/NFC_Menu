import {
  Button,
  createTheme,
  FormControl,
  Grid,
  Link,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Alert from "../alert";

const theme = createTheme({
  palette: {
    dark: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
});

const LinkMessage = ({ url, message }) => {
  return (
    <Link href={url} underline="always">
      {message}
    </Link>
  );
};

export default function ReadButton({ handleRead, messageDecoder, typeMessage }) {
  const [snack, setSnack] = useState({
    open: false,
    message: "Error",
    type: "Success",
  });

  const action = async () => {
    await handleRead()
      .then(() => {
        // throw { message: "test error" };
        setSnack({
          open: false,
          message: "",
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
        <Grid item xs={12} md={6}>
          <Paper elevation={5}>
            <Typography
              variant="h5"
              sx={{ padding: "14px", display: "flex", justifyContent: "center" }}
            >
              Leer NFC
            </Typography>
            <FormControl fullWidth>
              <ThemeProvider theme={theme}>
                <Button color="dark" variant="contained" onClick={() => action()} sx={{ m: 3 }}>
                  LEER NFC
                </Button>
                {console.log("snack", snack)}
                {snack.open && (
                  <Alert message={snack.message} Popen={snack.open} type={snack.type} />
                )}
              </ThemeProvider>
            </FormControl>
            <Typography
              variant="h5"
              sx={{ padding: "14px", display: "flex", justifyContent: "center" }}
            >
              {typeMessage === "text" ? (
                messageDecoder
              ) : typeMessage === "url" ? (
                <LinkMessage url={messageDecoder} message={messageDecoder} />
              ) : (
                messageDecoder === "Formato desconocido" && "Formato desconocido"
              )}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
