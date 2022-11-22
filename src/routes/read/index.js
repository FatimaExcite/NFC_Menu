import { Box } from "@mui/material";
import { useState } from "react";
import ReadButton from "../../components/readButton";

export default function Read() {
  const [readMessage, setReadMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const handleRead = async () => {
    const ndef = new window.NDEFReader();
    try {
      await ndef.scan();
      console.log("Leyendo mensaje exitosamente");
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        const messageDecoder = new TextDecoder();
        for (const record of message.records) {
          switch (record.recordType) {
            case "text":
              setReadMessage(messageDecoder.decode(record.data).toString());
              setTypeMessage("text");
              break;
            case "url":
              setReadMessage(messageDecoder.decode(record.data));
              setTypeMessage("url");
              break;
            default:
              setReadMessage("Formato desconocido");
              setTypeMessage("unknown");
          }
        }
      });
    } catch {
      console.log("Error! Try again.");
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%", paddingY: "5%" }}>
        <ReadButton
          handleRead={handleRead}
          messageDecoder={readMessage}
          typeMessage={typeMessage}
        />
      </Box>
    </div>
  );
}
