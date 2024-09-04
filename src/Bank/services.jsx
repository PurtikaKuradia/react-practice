import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BankDataContext } from "./bankDataContext";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Services() {
  const {
    loggedIn,
    setIsWithdrawalModalOpen,
    setIsDepositModalOpen,
    setIsStatementModalOpen,
  } = useContext(BankDataContext);
  const handleOpen = () => setIsWithdrawalModalOpen(true);
  const handleDepositOpen = () => setIsDepositModalOpen(true);
  const handleStatementOpen = () => setIsStatementModalOpen(true);

  if (!loggedIn) {
    return <Navigate to="/bank/login" />;
  }
  return (
    <Box
      height={200}
      width={200}
      my={5}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{
        "& > :not(style)": { m: 3, width: "40ch" },
        border: "1px solid",
        borderColor: "grey.500",
        borderRadius: 1,
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Button size="large" variant="outlined" onClick={handleDepositOpen}>
          DEPOSIT
        </Button>
        <Button size="large" variant="outlined" onClick={handleOpen}>
          WITHDRAWAL
        </Button>
        <Button size="large" variant="outlined" onClick={handleStatementOpen}>
          STATEMENT
        </Button>
      </Stack>
    </Box>
    // <div>
    //   <button
    //     onClick={() => {
    //       navigate("/bank/deposit");
    //     }}
    //   >
    //     {" "}
    //     Deposit
    //   </button>
    //   <button
    //     onClick={handleOpen}
    //   >
    //     {" "}
    //     Withdrawal
    //   </button>
    //   <button
    //     onClick={() => {
    //       navigate("/bank/statement");
    //     }}
    //   >
    //     Bank Statement
    //   </button>
    // </div>
  );
}
