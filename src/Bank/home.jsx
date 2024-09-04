import { useState } from "react";
import { BankDataContext } from "./bankDataContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Box, ThemeProvider } from "@mui/material";
import Debit from "./debit";
import Deposit from "./deposit";
import Statement from "./statement";

const theme = createTheme({});
export default function Home() {
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isStatementModalOpen, setIsStatementModalOpen] = useState(false);

  const [balance, setBalance] = useState(10000);
  const [loggedIn, setLoggedIn] = useState(false);
  const [creditList, setCreditList] = useState([]);

  const { pathname } = useLocation();

  console.log("==> test", pathname);
  return (
    <BankDataContext.Provider
      value={{
        balance,
        setBalance,
        loggedIn,
        setLoggedIn,
        isWithdrawalModalOpen,
        setIsWithdrawalModalOpen,
        isDepositModalOpen,
        setIsDepositModalOpen,
        isStatementModalOpen,
        setIsStatementModalOpen,
        creditList,
        setCreditList,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box>
          {/* <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar> */}
          <Outlet />
        </Box>
        {pathname !== "/bank/sign-up" && <Navigate to="login" />}
        <Debit />
        <Deposit />
        <Statement />
      </ThemeProvider>
    </BankDataContext.Provider>
  );
}
