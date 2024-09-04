import { useContext, useState } from "react";
import { BankDataContext } from "./bankDataContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

export default function Deposit() {
  const {
    balance,
    setBalance,
    creditList,
    setCreditList,
    isDepositModalOpen,
    setIsDepositModalOpen,
  } = useContext(BankDataContext);

  const [amount, setAmount] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setIsDepositModalOpen(false);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleSnackBarClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackBarClose}
      ></IconButton>
    </React.Fragment>
  );
  console.log("balance" + balance, creditList);

  return (
    <div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
          message={`Amount credited ${amount}`}
          action={action}
        />
      </div>
      <Modal
        open={isDepositModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        to
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 280,
            "& > :not(style)": { m: 3, width: "30ch" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter Amount"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            size="small"
            variant="contained"
            alignItems="centre"
            onClick={() => {
              if (amount?.trim()) {
                setBalance(Number(balance) + Number(amount));
                setOpen(true);
                setCreditList((prev) => [...prev, { type: "credit", amount }]);
              }
            }}
          >
            Deposit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
