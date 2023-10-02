import { Button, Grid, Input } from "@mui/joy";
import React, { useState } from "react";
import { useStompClient } from "react-stomp-hooks";

export function SendMessage({ username }: any) {
  const stompClient = useStompClient();
  const [messageState, setMessageState] = useState("");

  const message = {
    sender: username,
    message: messageState,
    Date: null,
  };

  const sendMessage = () => {
    if (stompClient && message.message.trim() != "") {
      stompClient.publish({
        destination: "/app/messages",
        body: JSON.stringify(message),
      });
    } else {
      // TODO: handle error
    }
  };

  return (
    <Grid
      width={"100%"}
      paddingX={5}
      gap={1}
      bottom={50}
      height={'10vh'}
      bgcolor={"#fff"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Input
        type={"text"}
        autoComplete={"off"}
        name={"message"}
        fullWidth
        value={messageState}
        placeholder={"Mensaje"}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
            setMessageState(" ");
          }
        }}
        onChange={(input) => setMessageState(input.target.value)}
      />
      <Button
        className="button-sender"
        type="submit"
        onClick={() => {
          sendMessage();
          setMessageState(" ");
        }}
      >
        Enviar
      </Button>
    </Grid>
  );
}

export default SendMessage;
