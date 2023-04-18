import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  setTotalResult,
  setTotalAveragePercentage,
} from "../../redux/result_reducer";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { saveAs } from "file-saver";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";

import { Breakdown } from "./breakdown";

export const Success = () => {
  const theme = useTheme();
  //   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isresult = useSelector((state) => state.result);
  const cat1 = isresult.cat1;
  const cat2 = isresult.cat2;
  const cat3 = isresult.cat3;
  const cat4 = isresult.cat4;
  const cat5 = isresult.cat5;
  const cat6 = isresult.cat6;
  const cat7 = isresult.cat7;
  const cat8 = isresult.cat8;
  const cat9 = isresult.cat9;
  const cat10 = isresult.cat10;
  const cat11 = isresult.cat11;
  const cat12 = isresult.cat12;
  const cat13 = isresult.cat13;
  const cat14 = isresult.cat14;
  const cat15 = isresult.cat15;
  const istotalAveragePercentage = isresult.totalAveragePercentage;
  const userInfo = isresult.user;

  const totalResults = [
    +cat1,
    +cat2,
    +cat3,
    +cat4,
    +cat5,
    +cat6,
    +cat7,
    +cat8,
    +cat9,
    +cat10,
    +cat11,
    +cat12,
    +cat13,
    +cat14,
    +cat15,
  ];

  const TotalResult = totalResults.reduce(function (total, amount) {
    return total + amount;
  });

  const totalAveragePercentage = (TotalResult / 75) * 100;

  try {
    dispatch(setTotalResult(TotalResult));
    dispatch(setTotalAveragePercentage(totalAveragePercentage));
  } catch (err) {
    console.log(err);
  }

  const handleClose = async () => {
    setDisabled(true);
    try {
      const savedUserResponse = await fetch(
        "https://web-production-0ff78.up.railway.app/create-pdf",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({
            data: isresult,
          }),
        }
      ).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }

    setOpen(false);

    navigate("/summary");
  };

  return (
    <Stack>
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          //   fullScreen={fullScreen}
        >
          <DialogTitle id="alert-dialog-title" fontSize={20} align="center">
            {"Your Export Readiness Assesment "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  mb: 3,
                }}
                align="center"
              >
                Dear, {userInfo.firstName} {userInfo.lastName}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  mb: 3,
                }}
              >
                Your Export Readiness Score is{" "}
                {istotalAveragePercentage.toFixed(2)}%
              </Typography>
              <span> kindly check </span>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  mb: 3,
                }}
                variant="body"
              >
                {userInfo.email}
              </Typography>{" "}
              <Typography
                sx={{
                  mt: 3,
                }}
              >
                the complete breakdown, implications and suggestions of scores
              </Typography>
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions> */}
          <Button
            onClick={handleClose}
            sx={{
              width: "20%",
              ml: "40%",
              mb: "2%",
            }}
            variant="contained"
            disabled={disabled}
          >
            Finish
          </Button>
          {/* </DialogActions> */}
        </Dialog>
      ) : (
        " "
      )}
    </Stack>
  );
};
