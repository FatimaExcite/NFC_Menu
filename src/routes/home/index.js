import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Box sx={{ display: "flex", m: 3 }}>
        <Button variant="contained">Write NFC</Button>
        <Button variant="contained">Read NFC</Button>
      </Box>
    </div>
  );
}
