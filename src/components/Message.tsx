import React from "react";
import { Box, Typography } from "@mui/joy";
import { Paper } from "@mui/material";
import { useStompClient } from "react-stomp-hooks";

function parse(message: string) {
  return JSON.parse(message);
}

function Message({ key, message }: { key?: any; message: string }) {
  const client = useStompClient();

  const name = client?.connectHeaders.name;

  return (
    <Box
      key={parse(message).date + new Date().getTime()}
      bgcolor={name === parse(message).sender ? "#eef" : ""}
      display={"flex"}
      textAlign={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      paddingY={1}
      component={Paper}
    >
      <Typography
        sx={{ margin: 0, paddingX: 1 }}
        fontSize={20}
        display={"flex"}
        alignItems={"start"}
        flexDirection={"column"}
      >
        <Typography fontSize={13}>{parse(message).sender} </Typography>
        {parse(message).message}
      </Typography>

      <Typography
        sx={{ margin: 0, paddingX: 1, textAlign: "center" }}
        fontSize={16}
      >
        {parse(message).date}
      </Typography>
    </Box>
  );
}

export default Message;
