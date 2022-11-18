import {
  Box,
  Button,
  createTheme,
  FormControl,
  Grid,
  Link,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";

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
  console.log("messageDecoder", messageDecoder);
  console.log("typeMessage", typeMessage);
  const action = async () => {
    await handleRead();
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
                  Read NFC
                </Button>
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
