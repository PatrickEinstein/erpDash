import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setParams, togglesidebar } from "../../redux/result_reducer";
import { useEffect } from "react";
import Foundlist from "./foundlist";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [value, setValue] = useState();
  const [sidebaron, setSidebaron] = useState(false);
  const dispatch = useDispatch();
  const togglesidebarOnOff = useSelector((state) => state.result.sidebar);
  console.log(togglesidebarOnOff);
  const handleClick = () => {
    setSidebaron((prev) => !prev);
    dispatch(togglesidebar(sidebaron));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    dispatch(setParams({ value: value }));
  }, [value]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Welcome to your Dashboard!
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={value}
                onChange={handleChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      {togglesidebarOnOff ? (
        <Box
          sx={{
            position: "absolute",
            top: 55,
            left: 0,
            width: 200,
            height: "100%",
            background: "aqua",
            overflow: "scroll",
            pr:3,
            pl:3,
            zIndex:10,
          }}
          
        >
          <Foundlist />
        </Box>
      ) : null}
    </>
  );
}
