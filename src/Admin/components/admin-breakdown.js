import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grading } from "./admin-recommendations";
import { useMediaQuery } from "@mui/material";

import {
  Recommends1,
  Recommends2,
  Recommends3,
  Recommends4,
  Recommends5,
  Recommends6,
  Recommends7,
  Recommends8,
  Recommends9,
  Recommends10,
  Recommends11,
  Recommends12,
  Recommends13,
  Recommends14,
  Recommends15,
  RecommendsAveragePercentage,
} from "./admin-recommendations";
import {
  Implications1,
  Implications2,
  Implications3,
  Implications4,
  Implications5,
  Implications6,
  Implications7,
  Implications8,
  Implications9,
  Implications10,
  Implications11,
  Implications12,
  Implications13,
  Implications14,
  Implications15,
  ImplicationsAveragePercentage,
} from "./admin-implications";
import { Box, Stack, Typography } from "@mui/material";
import { StateReturn } from "./state-return";
import { ComponentDownloadButton } from "./DownloadButton";

const columns = [
  { id: "name", label: "Category", minWidth: 100 },
  {
    id: "code",
    label: "Score",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: "population",
    label: "Implication",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Recommendation",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, code, population, size, density) {
  // const density = population / size;
  return { name, code, population, size, density };
}

export const Breakdown = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(18);
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Stater = StateReturn();
  const {
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
  } = Stater;

  const rows = [
    createData("Positioning", cat1, <Implications1 />, <Recommends1 />),
    createData("Promoters", cat2, <Implications2 />, <Recommends2 />),
    createData("Products", cat3, <Implications3 />, <Recommends3 />),
    createData("Pricing", cat4, <Implications4 />, <Recommends4 />),
    createData("Predisposition", cat5, <Implications5 />, <Recommends5 />),
    createData("Purpose", cat6, <Implications6 />, <Recommends6 />),
    createData("Payment", cat7, <Implications7 />, <Recommends7 />),
    createData("Production", cat8, <Implications8 />, <Recommends8 />),
    createData("Proficiency", cat9, <Implications9 />, <Recommends9 />),
    createData("People", cat10, <Implications10 />, <Recommends10 />),
    createData("Paperwork", cat11, <Implications11 />, <Recommends11 />),
    createData("Potentials", cat12, <Implications12 />, <Recommends12 />),
    createData("Promotion", cat13, <Implications13 />, <Recommends13 />),
    createData("Purchasers", cat14, <Implications14 />, <Recommends14 />),
    createData("partnership", cat15, <Implications15 />, <Recommends15 />),
    ,
    createData(
      "Total Score",
      <Typography sx={{ fontWeight: "bold" }}>
        {" "}
        {totalAveragePercentage?.toFixed(2) + "%"}{" "}
      </Typography>,
      <ImplicationsAveragePercentage />,
      <RecommendsAveragePercentage />
    ),
    createData("Grade", "...", <Grading />),
  ];

  return (
    <Stack
      sx={
        isNonMobileScreen
          ? {
              margin: 0,
            }
          : {
              margin: 0,
            }
      }
    >
      <Box
        height={15}
        sx={{
          padding: 3,
          height: "auto",
          width: "auto",
        }}
      >
        <Typography
          align="center"
          variant="h4"
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            mb: "auto",
            height: "auto",
          }}
        >
          {" "}
          Export Readiness Test for {companyName}
        </Typography>
      </Box>
      <Paper sx={{ width: "auto" }}>
        <TableContainer sx={{ maxHeight: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={1}>
                  {/* <Box
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/explogo.jpeg"}
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: "white",
                      }}
                    />
                  </Box> */}
                </TableCell>
                <TableCell align="left" colSpan={2}>
                  {/* <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    EXPORT READINESS TEST FOR
                  </Typography> */}
                </TableCell>
                <TableCell align="left" colSpan={3}>
                <Stack
                    direction="row"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={
                        isNonMobileScreen
                          ? {
                              width: 100,
                              height: 100,
                              position: "absolute",
                              left: "-530%",
                              top: -20,
                            }
                          : {
                              width: 100,
                              height: 100,
                              position: "absolute",
                              top: 0,
                              left: "-300%",
                            }
                      }
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/explogo.jpeg"}
                        style={{
                          width: 150,
                          height: 150,
                          backgroundColor: "white",
                        }}
                      />
                      </Box>
                  <Stack>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}> Name :</span>{" "}
                      {firstName} {lastName}
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}> Company :</span>{" "}
                      {companyName}
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}> Products : </span>{" "}
                      {Products}
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>Email :</span>{" "}
                      {email}
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}> Phone : </span>
                      {phone}
                    </Typography>
                  </Stack>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map(({ id, align, label, minWidth }) => (
                  <TableCell
                    key={id}
                    align={align}
                    style={{ top: 57, minWidth: minWidth }}
                  >
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map(({ id, align, label, minWidth, format }) => {
                        const value = row[id];
                        return (
                          <TableCell key={id} align={align}>
                            {format && typeof value === "number"
                              ? format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
     
    </Stack>
  );
};
