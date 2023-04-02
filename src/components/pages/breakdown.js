import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
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
} from "../recommendations/recommendation";
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
} from "../implications/implications";
import {
  Suggestions1,
  Suggestions2,
  Suggestions3,
  Suggestions4,
  Suggestions5,
  Suggestions6,
  Suggestions7,
  Suggestions8,
  Suggestions9,
  Suggestions10,
  Suggestions11,
  Suggestions12,
  Suggestions13,
  Suggestions14,
  Suggestions15,
  SuggestionsAveragePercentage,
} from "../implications/implications";

const columns = [
  { id: "name", label: "Category", minWidth: 100 },
  {
    id: "code",
    label: "Score",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: "Implication",
    label: "Implication",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Recommendation",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Suggestion",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size, density) {
  // const density = population / size;
  return { name, code, population, size, density };
}

export const Breakdown = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(18);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

  const rows = [
    createData("1", cat1, <Recommends1 />, 3310),
    createData("2", cat2, <Recommends2 />),
    createData("3", cat3, <Recommends3 />),
    createData("4", cat4, <Recommends4 />),
    createData("5", cat5, <Recommends5 />),
    createData("6", cat6, <Recommends6 />),
    createData("7", cat7, <Recommends7 />),
    createData("8", cat8, <Recommends8 />),
    createData("9", cat9, <Recommends9 />),
    createData("10", cat10, <Recommends10 />),
    createData("11", cat11, <Recommends11 />),
    createData("12", cat12, <Recommends12 />),
    createData("13", cat13, <Recommends13 />),
    createData("14", cat14, <Recommends14 />),
    createData("15", cat15, <Recommends15 />),
    ,
    createData(
      "Total Score",
      istotalAveragePercentage.toFixed(2),
      <RecommendsAveragePercentage />
    ),
  ];

  return (
    <Paper sx={{ width: "auto" }}>
      <TableContainer sx={{ maxHeight: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}>
                <img src={faker.image.avatar()} />
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Name :
              </TableCell>
              <TableCell align="center" colSpan={3}>
                {userInfo.firstName} {userInfo.lastName}
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
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
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};
