import { Input, Button } from "@mui/joy";
import { Grid } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import { useStompClient } from "react-stomp-hooks";

type Props = {
  registered: boolean;
  setRegistered: SetStateAction<boolean> | SetStateAction<any>;
  setName: SetStateAction<string> | SetStateAction<any>;
};

function RegisterComponent({ registered, setRegistered, setName }: Props) {
  const client = useStompClient();
  const [username, setUsername] = useState("");

  function setHeader() {
    if (username.trim() !== "") {
      setName(username);
      if (client)
        client.connectHeaders = {
          name: username,
        };
      setRegistered(true);
    }
  }

  return (
    <>
      {!registered && (
        <Grid
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          height="100%"
        >
          <Input
            size="lg"
            color="primary"
            type="text"
            onChange={(input) => setUsername(input.target.value)}
            placeholder="Elige un nombre"
          />
          <Button
            variant="soft"
            color="primary"
            type="submit"
            size="lg"
            onClick={setHeader}
          >
            Ingresar
          </Button>
        </Grid>
      )}
    </>
  );
}

export default RegisterComponent;
