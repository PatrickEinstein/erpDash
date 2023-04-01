import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  setTotalResult,
  setTotalAveragePercentage,
} from "../redux/result_reducer";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";
export const Success = () => {
  const theme = useTheme();
  //   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(true);
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

  console.log(userInfo);

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
  console.log(totalResults);
  const TotalResult = totalResults.reduce(function (total, amount) {
    return total + amount;
  });

  const totalAveragePercentage = (TotalResult / 75) * 100;
  console.log(totalAveragePercentage);

  try {
    dispatch(setTotalResult(TotalResult));
    dispatch(setTotalAveragePercentage(totalAveragePercentage));
  } catch (err) {
    console.log(err);
  }

  const handleClose = () => {
    setOpen(false);
    navigate("/");
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
          <DialogTitle id="alert-dialog-title">
            {"You Have Succesfully Completed The Export Readiness Test"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography>
                Drear{" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {userInfo.firstName} {userInfo.lastName}
                </Typography>
                Your Export readiness shows your are
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  {istotalAveragePercentage.toFixed(2)}%
                </Typography>
                ready. check{" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {userInfo.email}
                </Typography>{" "}
                for breakdown, implications and suggestions of scores
              </Typography>
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions> */}
            <Button onClick={handleClose}
            sx={{
                width:"20%",
                ml : '40%',
                mb : "2%"
            }}
            
            variant="contained"
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
