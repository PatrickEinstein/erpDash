import React, { useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

// import "../styles/Main.css";

import { Button, IconButton, Typography} from "@mui/material";
import { useDispatch } from "react-redux";
import {Stack} from "@mui/material";

export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/quiz");
  };

  return (
    <Stack
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            height: "100%",
            pt: 10,
          }}
        >
      <Typography>Export Readiness Assessment</Typography>
      <Typography>
      <ol>
        <li>You will be asked 75 questions in total and in 15 categories </li>
        <li>Each category has 5 questions only.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      </Typography>
      <IconButton onClick={handleSubmit}>
        <Button>Start</Button>
      </IconButton>
    </Stack>
  );
}
