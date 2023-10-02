import React, { useEffect, useState } from "react";
import { useSubscription } from "react-stomp-hooks";
import Message from "./Message";
import { Grid } from "@mui/joy";

export function SuscribingComponent() {
  const [lastMessage, setLastMessage] = useState<any[]>([]);

  useSubscription("/topic/messages", (message) =>
    setLastMessage([...lastMessage, message.body])
  );

  return (
    <Grid
      display={"flex"}
      justifyContent={"start"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ width: "100%", overflowY: "auto" }}
      gap={1}
      padding={5}
      height={"90vh"}
    >
      {lastMessage.map((message, key) => (
        <Message key={key} message={message}></Message>
      ))}
    </Grid>
  );
}

export default SuscribingComponent;
