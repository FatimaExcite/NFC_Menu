import { Box } from "@mui/material";
import WriteButton from "../../components/writeButton";

export default function Write() {
  const handleWrite = async (type, message) => {
    const ndef = new window.NDEFReader();
    try {
      await ndef.write({
        records: [{ recordType: type, data: message }],
      });
      console.log("Mensaje Escrito");
    } catch {
      console.log("Erro al escribir, inetnta de nuevo");
    }
  };

  return (
    <div>
      <Box sx={{ maxWidth: "100%", paddingY: "5%" }}>
        <WriteButton handleWrite={handleWrite} />
      </Box>
    </div>
  );
}
