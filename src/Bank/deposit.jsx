import { useContext, useState } from "react";
import { BankDataContext } from "./bankDataContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
  const [value, setValue] = useState();

  const handleClose = () => {
    setIsDepositModalOpen(false);
    setAmount("");
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
      >
        <FontAwesomeIcon icon={faClose} />
      </IconButton>
    </React.Fragment>
  );
  console.log("balance" + balance, creditList, amount);

  return (
    <div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
          message={`Amount credited ${value}`}
          action={action}
        />
      </div>
      <Dialog
        open={isDepositModalOpen}
        // onClose={handleClose}
        className="dialog-box-"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 2,
          }}
          variant="h6"
        >
          <Box
            sx={{
              color: "grey.700",
            }}
          >
            Deposit
          </Box>
          <Box sx={{ color: "grey.600" }} onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            pb: 0,
            px: 2,
            border: "1px solid",
            borderColor: "grey.300",
            borderLeft: 0,
            borderRight: 0,
          }}
        >
          <Box sx={{ py: 2 }}>
            <Typography
              variant="body2"
              sx={{ pt: 1, pb: 2, color: "grey.700" }}
            >
              Current Balance: {balance}
            </Typography>
            <TextField
              size="small"
              sx={{ p: 0 }}
              id="outlined-basic"
              label="Enter Amount"
              variant="outlined"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 2 }}>
          <Box>
            <Button
              size="small"
              variant="outlined"
              alignItems="centre"
              sx={{ color: "grey.600", borderColor: "grey.500" }}
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </Button>
          </Box>
          <Button
            color="success"
            size="small"
            variant="contained"
            alignItems="centre"
            onClick={() => {
              if (amount?.trim()) {
                setValue(amount);
                handleClose();
                setBalance(Number(balance) + Number(amount));
                setCreditList((prev) => [...prev, { type: "credit", amount }]);
                setOpen(true);
                setAmount("");
              }
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
