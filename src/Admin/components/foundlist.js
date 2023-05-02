import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { setSelectedUser } from "../../redux/result_reducer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: 40,
  color: theme.palette.text.secondary,
}));

export default function Foundlist() {
  const dispatch = useDispatch();
  const paramsForSearch = useSelector((state) => state.result.Params.value);
  const [theUserOrAllUser, setTheUserorAllUser] = useState([]);

  const FindAllUsers = async () => {
    try {
      const savedUserResponse = await fetch("users/alluser");
      const savedUsers = await savedUserResponse.json();
      // console.log(savedUsers);
      setTheUserorAllUser(savedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const FindThisUser = async () => {
    try {
      const savedUserResponse = await fetch("users/thisuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parameter: paramsForSearch,
        }),
      });
      const user = await savedUserResponse.json();
      console.log(user);
      setTheUserorAllUser(user);
    } catch (error) {
      console.log(`error ==>${error}`);
    }
  };

  useEffect(() => {
    try {
      if (
        paramsForSearch === undefined ||
        paramsForSearch === null ||
        paramsForSearch === "" 
      ) {
        FindAllUsers();
      } else {
        FindThisUser();
      }
    } catch (err) {
      console.log(err);
    }
  }, [paramsForSearch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        align="center"
        sx={{
          marginBottom: 5,
        }}
      >
        {theUserOrAllUser?.users
          ? `Total users  ${theUserOrAllUser?.users?.length}`
          : "Did not find any match"}
      </Typography>
      <Grid container spacing={2}>
        {theUserOrAllUser?.users?.map(
          ({
            firstName,
            Products,
            lastName,
            phone,
            email,
            pdf,
            companyName,
            cat1,
            cat2,
            cat3,
            cat4,
            cat5,
            cat6,
            cat7,
            cat8,
            cat9,
            cat10,
            cat11,
            cat12,
            cat13,
            cat14,
            cat15,
            totalAveragePercentage,
            totalResult,
            _id,
          }) => (
            <Grid
              item
              xs={12}
              key={`${firstName} + ${email} +${phone} + ${_id}`}
            >
              <Item
                onClick={() => {
                  dispatch(
                    setSelectedUser({
                      firstName,
                      Products,
                      lastName,
                      phone,
                      email,
                      pdf,
                      companyName,
                      cat1,
                      cat2,
                      cat3,
                      cat4,
                      cat5,
                      cat6,
                      cat7,
                      cat8,
                      cat9,
                      cat10,
                      cat11,
                      cat12,
                      cat13,
                      cat14,
                      cat15,
                      totalAveragePercentage,
                      totalResult,
                      _id,
                    })
                  );
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignContent="center"
                  justifyContent="space-aound"
                >
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {firstName[0]}
                  </Avatar>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignContent="center"
                    justifyContent="space-between"
                  >
                    {firstName} {lastName}
                  </Stack>
                </Stack>
              </Item>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
