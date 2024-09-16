import { useContext, useState } from "react";
import { BankDataContext } from "./bankDataContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Debit() {
  const {
    balance,
    setBalance,
    isWithdrawalModalOpen,
    setIsWithdrawalModalOpen,
    setCreditList,
  } = useContext(BankDataContext);

  const [amount, setAmount] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  const handleClose = () => {
    setIsWithdrawalModalOpen(false);
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

  console.log("==> context", balance, isWithdrawalModalOpen);

  return (
    <div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
          message={`Amount debited ${value}`}
          action={action}
        />
      </div>
      <Dialog
        open={isWithdrawalModalOpen}
        onClose={handleClose}
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
            Withdrawal
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
                setAmount("");
              }}
            >
              Cancel
            </Button>
          </Box>
          <Button
            color="error"
            size="small"
            variant="contained"
            alignItems="centre"
            onClick={() => {
              if (balance >= Number(amount)) {
                if (amount) {
                  setBalance(Number(balance) - Number(amount));
                  setValue(amount);
                  setCreditList((prev) => [...prev, { type: "debit", amount }]);
                  setAmount("");
                  handleClose();
                  setOpen(true);
                  console.log("debited", balance);
                } else {
                  alert("Please enter amount.");
                }
              } else {
                alert("You don't have sufficient Balance");
              }
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    // <div>
    //   <Modal
    //     open={isWithdrawalModalOpen}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box
    //       sx={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         width: 300,
    //         "& > :not(style)": { m: 2, width: "30ch" },
    //         bgcolor: "background.paper",
    //         border: "2px solid #000",
    //         boxShadow: 24,
    //         p: 4,
    //       }}
    //     >
    //       <TextField
    //         id="outlined-basic"
    //         label="Enter Amount"
    //         variant="outlined"
    //         value={amount}
    //         onChange={(e) => setAmount(e.target.value)}
    //       />
    //       <Button
    //         size="small"
    //         variant="contained"
    //         alignItems="centre"
    //         onClick={() => {
    //           if (balance >= amount) {
    //             if (amount) {
    //               setBalance(Number(balance) - Number(amount));
    //               alert("Your Current balance is:" + Number(balance));
    //               setCreditList((prev) => [...prev, { type: "debit", amount }]);
    //               setAmount();

    //               console.log("debited", balance);
    //             } else {
    //               alert("Please enter amount.");
    //             }
    //           } else {
    //             alert("You don't have sufficient Balance");
    //           }
    //         }}
    //       >
    //         Withdraw
    //       </Button>
    //     </Box>
    //   </Modal>
    // </div>
  );
}
