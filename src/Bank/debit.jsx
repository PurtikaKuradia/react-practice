import { useContext, useState } from "react";
import { BankDataContext } from "./bankDataContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

export default function Debit() {
  const {
    balance,
    setBalance,
    isWithdrawalModalOpen,
    setIsWithdrawalModalOpen,
    setCreditList,
  } = useContext(BankDataContext);
  const [amount, setAmount] = useState();
  const handleClose = () => {
    setIsWithdrawalModalOpen(false);
  };

  console.log("==> context", balance, isWithdrawalModalOpen);
  return (
    <div>
      <Modal
        open={isWithdrawalModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            "& > :not(style)": { m: 2, width: "30ch" },
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
              if (balance >= amount) {
                if (amount) {
                  setBalance(Number(balance) - Number(amount));
                  alert("Your Current balance is:" + Number(balance));
                  setCreditList((prev) => [...prev, { type: "debit", amount }]);
                  setAmount();

                  console.log("debited", balance);
                } else {
                  alert("Please enter amount.");
                }
              } else {
                alert("You don't have sufficient Balance");
              }
            }}
          >
            Withdraw
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
