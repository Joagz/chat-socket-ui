import React, { useState } from "react";
import SendMessage from "./SendMessage";
import SuscribingComponent from "./SuscribingComponent";
import RegisterComponent from "./RegisterComponent";
import { Grid } from "@mui/material";

function MainComponent() {
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");

  return (
    <Grid
      sx={{
        justifyContent: "center",
        alignItems: "start",
        display: "flex",
        height: "100vh",
      }}
      className="container"
    >
      {registered && (
        <Grid
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexDirection={"column"}
          width={"100%"}
        >
          <SuscribingComponent />
          <SendMessage username={name} />
        </Grid>
      )}
      <RegisterComponent
        setName={setName}
        registered={registered}
        setRegistered={setRegistered}
      />
    </Grid>
  );
}

export default MainComponent;
