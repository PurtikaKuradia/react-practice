import { useState } from "react";
import { BankDataContext } from "./bankDataContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Box, ThemeProvider } from "@mui/material";
import Header from "./header";

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
        <Box className="wrapper">
          <Box className="header-wrapper" style={{ height: "64px" }} mb={2}>
            <Header />
          </Box>
          {pathname !== "/bank/sign-up" && <Navigate to="login" />}
          <Box className="body-wrapper" style={{ height: "calc(100% - 80px)" }}>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </BankDataContext.Provider>
  );
}
