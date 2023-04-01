import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { setUser } from "../redux/result_reducer";

import { useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!firstName || !lastName || !lastName) {
      alert(" Kindly Tell me about you");
    } else {
      dispatch(setUser({ firstName, lastName, email, phone }));
      navigate("/prep");
    }

    return;
  };

  const theme = useTheme();
  return (
    <Box>
      <Stack
        spacing={2}
        justifyContent="space-between"
        alignItems={"center"}
        sx={{
          width: "auto",
          padding: 2,
        }}
      >
        {/* 1 */}
        <Avatar src={faker.image.avatar()} />
        {/* w */}
        <Stack spacing={3}>
          <Box sx={{ width: "100%" }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 12">
                <TextField
                  label="firstName"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>
              <Box gridColumn="span 12">
                <TextField
                  label="Lastname"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
              <Box gridColumn="span 12">
                <TextField
                  label="Phone"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <Box gridColumn="span 12">
                <TextField
                  label="E-mail"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="info"
            style={{
              backgroundColor: "white",
              width:"40%",
              ml : '40%',
            }}
            onClick={handleSubmit}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "8px",
              }}
              color={theme.palette.primary.main}
            >
              Enroll now
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
