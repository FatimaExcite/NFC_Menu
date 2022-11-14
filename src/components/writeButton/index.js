import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import react, { useState } from "react";

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
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ mb: 3 }}>
            Tipo
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Tipo"
            onChange={handleChange}
            sx={{ mb: 3 }}
          >
            <MenuItem value={"text"}>Texto</MenuItem>
            <MenuItem value={"url"}>URL</MenuItem>
          </Select>
          <TextField
            fullWidth
            label="mensaje"
            id="message"
            sx={{ mb: 3 }}
            onChange={handleChangeMessage}
          />
          <Button variant="contained" onClick={() => action()} sx={{ mb: 3 }}>
            Write NFC
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
