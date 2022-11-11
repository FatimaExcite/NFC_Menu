import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import react, { useState } from "react";

export default function WriteButton() {
  const [message, setMessage] = useState("");

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleWrite = async () => {
    const ndef = new window.NDEFReader();
    try {
      await ndef.write({
        records: [{ recordType: "url", data: "https://w3c.github.io/web-nfc/" }],
      });
      console.log("Message written.");
    } catch {
      console.log("Write failed :-( try again.");
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ mb: 3 }}>
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ mb: 3 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField fullWidth label="fullWidth" id="fullWidth" sx={{ mb: 3 }} />
          <Button variant="contained" onClick={() => handleWrite()} sx={{ mb: 3 }}>
            Write NFC
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
