import { Box, Button } from "@mui/material";
import WriteButton from "../../components/writeButton";

export default function Write() {
  const handleWrite = async (type, message) => {
    console.log("type", type);
    console.log("message", message);
    const ndef = new window.NDEFReader();
    try {
      await ndef.write({
        records: [{ recordType: type, data: message }],
      });
      console.log("Message written.");
    } catch {
      console.log("Write failed :-( try again.");
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%", paddingY: "5%" }}>
        <WriteButton handleWrite={handleWrite} />
      </Box>
    </div>
  );
}
