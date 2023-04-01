import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { faker } from "@faker-js/faker";
import { GoogleLogo, SlackLogo, StripeLogo, UserCircle } from "phosphor-react";
import { useMediaQuery } from "@mui/material";
import { Forms } from "./form";

export const Main2 = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:900px)");

  return (
    <Stack
      spacing={5}
      backgroundColor="powderblue"
      sx={{
        height: 1000,
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            height: "100%",
            pt: 2,
          }}
        >
          <AvatarGroup>
            <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
            <Avatar alt="Travis Howard" src={faker.image.avatar()} />
            <Avatar alt="Cindy Baker" src={faker.image.avatar()} />
            <Avatar alt="Agnes Walker" src={faker.image.avatar()} />
            <Avatar alt="Trevor Henderson" src={faker.image.avatar()} />
          </AvatarGroup>
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 15,
                color: theme.palette.secondary.contrastText,
              }}
            >
              255k+
            </Typography>
            <Typography
              sx={{
                color: theme.palette.secondary.contrastText,
              }}
            >
              Previews
            </Typography>
          </Stack>
        </Stack>
        <Typography
          variant="h5"
          align="center"
          color={theme.palette.secondary.contrastText}
          sx={{
            pr: 4,
            pl: 4,
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Welcome User
        </Typography>
        <Box
          sx={{
            height: 250,
            width: 150,
            borderRadius: "50%",
          }}
          backgroundColor="white"
        >
          <Avatar
            alt="Remy Sharp"
        src={faker.image.avatar()}
            sx={{ width: 150, height: 150 }}
          />
        </Box>
        <Typography
          variant="h5"
          align="center"
          color={theme.palette.secondary.contrastText}
          sx={{
            pt: 2,
            pr: 4,
            pl: 4,
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Can We Meet You ?
        </Typography>
      </Stack>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        {/* FORM */}
        <Forms />
      </Stack>
    </Stack>
  );
};
