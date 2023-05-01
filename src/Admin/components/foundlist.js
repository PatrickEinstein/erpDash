import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import { setSelectedUser } from "../../redux/result_reducer";
import Converter from "./Converter";

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
  const [pdfBlob, setPdfBlob] = useState(null);
  const [theUserOrAllUser, setTheUserorAllUser] = useState([]);

  const findAllUsers = async () => {
    try {
      const savedUserResponse = await fetch(
        "http://localhost:5000/users/alluser"
      );
      const savedUsers = await savedUserResponse.json();
      //const userPdf = savedUsers.users[0].pdf;
      // Converter(userPdf);
      // console.log(userPdf);
      setTheUserorAllUser(savedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const findThisUser = async () => {
    try {
      const savedUserResponse = await fetch(
        "http://localhost:5000/users/thisuser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            parameter: paramsForSearch,
          }),
        }
      );
      const user = await savedUserResponse.json();
      // const userPdf = user.users[0].pdf;
      // Converter(userPdf);
      // console.log(userPdf);
      setTheUserorAllUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      if (
        paramsForSearch === undefined ||
        paramsForSearch === null ||
        paramsForSearch === ""
      ) {
        // window.location.reload();
        findAllUsers();
      } else {
        findThisUser();
      }
    } catch (err) {
      console.log(err);
    }
  }, [paramsForSearch]);

  return (
    <Box sx={{ flexGrow: 1, overflow: "scroll" }}>
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
            index,
            firstName,
            lastName,
            file,
            companyName,
            phone,
            Products,
            email,
            pdf,
          }) => (
            <Grid item xs={12} key={file}>
              <Item
                onClick={() => {
                  dispatch(
                    setSelectedUser({
                      index,
                      firstName,
                      lastName,
                      file,
                      companyName,
                      phone,
                      Products,
                      email,
                      pdf,
                    })
                  );
                }}
              >
                {firstName} {lastName}
              </Item>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
