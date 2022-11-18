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
      console.log("Scan started successfully.");
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        console.log("Serial Number:", serialNumber);
        console.log("Message:", message);
        const messageDecoder = new TextDecoder();
        for (const record of message.records) {
          switch (record.recordType) {
            case "text":
              console.log("Text:", messageDecoder.decode(record.data));
              setReadMessage(messageDecoder.decode(record.data).toString());
              setTypeMessage("text");
              break;
            case "url":
              console.log("URL:", messageDecoder.decode(record.data));
              setReadMessage(messageDecoder.decode(record.data));
              setTypeMessage("url");
              break;
            default:
              console.log("Unknown data format.");
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
