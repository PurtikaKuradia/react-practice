import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { BankDataContext } from "./bankDataContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { loggedIn, setLoggedIn } = useContext(BankDataContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("path", typeof pathname);

  const handleOnclick = () => {
    if (loggedIn) {
      navigate("/bank/login");
      setLoggedIn(false);
    } else if (pathname === "/bank/sign-up") {
      navigate("/bank/login");
    } else {
      navigate("/bank/sign-up");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar width="100%" color="info">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            //    <MenuIcon /> 
            </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 2,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              APNA BANK
            </Typography>
            <Button
              style={{ marginRight: "20px" }}
              color="inherit"
              onClick={handleOnclick}
            >
              {loggedIn
                ? "log-out"
                : pathname === "/bank/sign-up"
                ? "login"
                : "sign-up"}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
