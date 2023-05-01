import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProfileCard from "./profilecard";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const paramsForSearch = useSelector((state) => state.result.Params.value);
  const userToProfile = useSelector((state) => state.result.selecteduser);
  const { file, firstName, lastName, email, companyName, products, phone,pdf } =
    userToProfile;
    // console.log(userToProfile)
  //console.log(file)
 


  

  return (
    <Stack justifyContent="space-around">
      {paramsForSearch || userToProfile ? (
        <>
          {/* { flexGrow: 1 } */}
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "20%",
              marginTop: 1,
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={12} md={8}>
                <ProfileCard
                  firstName={firstName}
                  lastName={lastName}
                  phone={phone}
                  companyName={companyName}
                  email={email}
                  file={file}
                  pdf={pdf}
                />
              </Grid>
            </Grid>
         
          </Box>
        </>
      ) : (
        <Typography>
          {" "}
          <CaretLeft /> Click on any result on the left
        </Typography>
      )}
    </Stack>
  );
}
