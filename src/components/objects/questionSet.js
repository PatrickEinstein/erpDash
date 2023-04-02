import React, { useState } from "react";
import { allQuestions } from "./questions";
import { Sections } from "../pages/section";
import { Heading } from "./questionsHeading";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCat15 } from "../../redux/result_reducer";
import { useNavigate } from "react-router-dom";
import Pagination from "react-mui-pagination";
import { useMediaQuery } from "@material-ui/core";
import { Success } from "../pages/success";
import { useTheme } from "@mui/material/styles";

export const Categories = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMediaScreens = useMediaQuery("(min-width:900)");
  const [count, setCount] = React.useState(0);

  const question = allQuestions[count];
  const { Q1, Q2, Q3, Q4, Q5 } = question;
  const header = Heading[count];
  const { H } = header;
  const C = count + 1;

  const handleSubmit = () => (dispatch(setCat15(5)), navigate("/success"));

  const handleChange = (event, value) => {
    setCount(value - 1);
  };

  const onPrevious = () => {
    setCount((count) => count - 1);
  };

  const onNext = () => {
    setCount((count) => count + 1);
  };

  return (
    <Stack
      spacing={5}
      backgroundColor="powderblue"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: "auto",
        p: 3,
      }}
    >
      {" "}
      <Pagination
        page={count + 1}
        setPage={handleChange}
        total={150}
        numOfLinks={isNonMediaScreens ? 10 : 2}
      />
      <Box
        sx={{}}
        // backgroundColor="powderblue"
        width={isNonMediaScreens ? 700 : "auto"}
      >
        <Typography>{`category ${C}`}</Typography>
        <Typography
          variant="h5"
          align="center"
          // color={theme.palette.primary.light}
          sx={{
           
            fontWeight: "bold",
            fontSize: "20px",
            color:"white"
          }}
        >
          {H}
        </Typography>
        <Sections Q1={Q1} Q2={Q2} Q3={Q3} Q4={Q4} Q5={Q5} C={C} />

        <Stack direction="row" justifyContent="center" alignItems="center">
          {count < 1 ? (
            <IconButton>
              <Button>Previous</Button>
            </IconButton>
          ) : (
            <IconButton onClick={onPrevious}>
              <Button>Previous</Button>
            </IconButton>
          )}

          {count < 14 ? (
            <IconButton onClick={onNext}>
              <Button>Next</Button>
            </IconButton>
          ) : (
            <IconButton onClick={handleSubmit}>
              <Button>Submit</Button>
            </IconButton>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

// (() => {
//     switch (count) {
//         case 0 < count <= 13:
//             return (
//                 <IconButton onClick={() =>setCount((count) => count + 1)} >
//                     <Button>Next</Button>
//                 </IconButton>
//             )
//             break;
//         case 14:
//             return (
//                 <IconButton >
//                     <Button>Submit</Button>
//                 </IconButton>
//             )
//             break;

//     }
// })()
