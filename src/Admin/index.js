import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SearchAppBar from "./components/search";
import ProfileCard from "./components/profilecard";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProfileCards from "./components/profilecards";
import Foundlist from "./components/foundlist";
import { SignalCellularNullTwoTone } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Dashboard() {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <SearchAppBar />
      <Stack justifyContent="space-between" direction="row">
       {isNonMobileScreen ? <Box
          sx={{
            width: "30%",
            backgroundColor: "aqua",
            marginTop: 1,
            padding: 1,
            height: 700,
            overflow: "scroll",
          }}
        >
          <Foundlist />
        </Box>: null
        }


        <Box
          sx={isNonMobileScreen ? {
            width: "70%",
          } : {
            width: "100%",
            marginright: 1,
            marginLeft:0,
          }}
        >
          <ProfileCards />
        </Box>
      </Stack>
    </Stack>
  );
}


